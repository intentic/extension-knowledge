// The frontmatter subset a note may use, not YAML (an unquoted `[[Ada]]` or `no` would parse as something other than a
// string). Every value normalises to a list of strings; malformed input is skipped, never thrown, and `kb check`
// reports what it couldn't read.

// The `---` fenced header at the top of the file; \r\n tolerated for editor round-trips.
const FRONTMATTER = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;

export interface Frontmatter {
    // Every key that parsed, in file order, each as a list (a scalar is a list of one).
    readonly fields: ReadonlyMap<string, readonly string[]>;
    // Keys present in the header that this parser does not understand, surfaced by `kb check`, never thrown.
    readonly unreadable: readonly string[];
    // The note without its header. What gets rendered and what a body-link scan reads.
    readonly body: string;
    // Whether there was a header at all, an empty one and a missing one are different things to report on.
    readonly present: boolean;
}

// Quotes stripped; a trailing `# comment` is left alone, since tags like `#colleague` show up in real values.
const scalar = (raw: string): string => {
    const value = raw.trim();
    const quoted = /^"(.*)"$/s.exec(value) ?? /^'(.*)'$/s.exec(value);
    return (quoted?.[1] ?? value).trim();
};

// Items of a flow list `[a, "b, still b", c]`, split on commas outside quotes.
const flowItems = (inner: string): string[] => {
    const items: string[] = [];
    let current = "";
    let quote: string | undefined;
    for (const char of inner) {
        if (quote !== undefined) {
            if (char === quote) {
                quote = undefined;
            }
            current += char;
        } else if (char === '"' || char === "'") {
            quote = char;
            current += char;
        } else if (char === ",") {
            items.push(current);
            current = "";
        } else {
            current += char;
        }
    }
    items.push(current);
    return items.map(scalar).filter((item) => item !== "");
};

const KEY_NAME = /^[A-Za-z_][\w.-]*$/;

const keyLine = (line: string): readonly [name: string, inline: string] | undefined => {
    const colon = line.indexOf(":");
    if (colon === -1) {
        return undefined;
    }
    let nameEnd = colon;
    while (line[nameEnd - 1] === " " || line[nameEnd - 1] === "\t") {
        nameEnd--;
    }
    const name = line.slice(0, nameEnd);
    return KEY_NAME.test(name) ? [name, line.slice(colon + 1).trim()] : undefined;
};

const blockItem = (line: string): string | undefined => {
    let dash = 0;
    while (line[dash] === " " || line[dash] === "\t") {
        dash++;
    }
    if (dash === 0 || line[dash] !== "-") {
        return undefined;
    }
    let valueStart = dash + 1;
    while (line[valueStart] === " " || line[valueStart] === "\t") {
        valueStart++;
    }
    return line.slice(valueStart);
};

export const parseFrontmatter = (content: string): Frontmatter => {
    const match = FRONTMATTER.exec(content);
    if (match === null) {
        return { fields: new Map(), unreadable: [], body: content, present: false };
    }
    const fields = new Map<string, string[]>();
    const unreadable: string[] = [];
    const lines = (match[1] ?? "").split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i] ?? "";
        // A full-line comment or blank; an indented line belongs to an already-consumed block list or an unread shape.
        if (line.trim() === "" || line.trimStart().startsWith("#") || /^[ \t]/.test(line)) {
            continue;
        }
        const key = keyLine(line);
        if (key === undefined) {
            continue;
        }
        const [name, inline] = key;
        const flow = /^\[(.*)\]$/s.exec(inline);
        if (flow !== null) {
            fields.set(name, flowItems(flow[1] ?? ""));
            continue;
        }
        if (inline !== "") {
            fields.set(name, [scalar(inline)]);
            continue;
        }
        // Nothing after the colon: either a block list follows, or it's a nested map this parser can't read.
        const items: string[] = [];
        let j = i + 1;
        for (; j < lines.length; j++) {
            const next = lines[j] ?? "";
            if (next.trim() === "") {
                continue;
            }
            const item = blockItem(next);
            if (item === undefined) {
                break;
            }
            const value = scalar(item);
            if (value !== "") {
                items.push(value);
            }
        }
        if (items.length > 0) {
            fields.set(name, items);
        } else {
            unreadable.push(name);
        }
        i = j - 1;
    }
    return { fields, unreadable, body: content.slice(match[0].length), present: true };
};

// Writes a header back for `kb new`/`kb set`, in the shape this parser reads by construction. Order is the caller's; a
// value is quoted only when bare would change it. Body passes through untouched.
const needsQuotes = (value: string): boolean => value === "" || /^[[\-#&*!|>%@`'"]/.test(value) || /:\s|\s#|^\s|\s$/.test(value);

const emit = (value: string): string => (needsQuotes(value) ? `"${value.replace(/(["\\])/g, "\\$1")}"` : value);

export const formatFrontmatter = (fields: ReadonlyMap<string, readonly string[]>, body: string): string => {
    const lines: string[] = [];
    for (const [key, values] of fields) {
        if (values.length === 0) {
            continue;
        }
        // A single value stays a scalar (`type: person`, not `type: [person]`); multi-valued keys use the flow form.
        lines.push(values.length === 1 ? `${key}: ${emit(values[0] ?? "")}` : `${key}: [${values.map(emit).join(", ")}]`);
    }
    // No blank line after the fence: `parseFrontmatter` stops there, so anything past it is body.
    return `---\n${lines.join("\n")}\n---\n${body.replace(/^\n+/, "")}`;
};

// ONE FIELD CHANGED, AND NOTHING ELSE MOVED: what the panel writes when a value is changed where it is read. Only that
// key's own lines are rewritten (its line, and the indented list under it); every other line of the header, comments,
// order and quoting included, and the whole body, come back byte for byte. A list keeps the shape it was written in
// (flow stays flow, a block list stays a block list), a new key goes last, and no values at all takes the key out. A file
// with no header gets one; a header left with nothing in it goes away.
const OPENING_FENCE = /^---[ \t]*\r?\n/;

export const setField = (content: string, key: string, values: readonly string[]): string => {
    const match = FRONTMATTER.exec(content);
    const kept = values.map((value) => value.trim()).filter((value) => value !== "");
    if (match === null) {
        return kept.length === 0 ? content : `---\n${fieldLines(key, kept, undefined).join("\n")}\n---\n${content}`;
    }
    const newline = match[0].includes("\r\n") ? "\r\n" : "\n";
    const innerStart = OPENING_FENCE.exec(content)?.[0].length ?? 0;
    const inner = match[1] ?? "";
    const lines = inner.split(/\r?\n/);
    const at = lines.findIndex((line) => !/^[ \t]/.test(line) && keyLine(line)?.[0] === key);
    let next: string[];
    if (at === -1) {
        if (kept.length === 0) {
            return content;
        }
        // After the last line that says something, so a trailing blank or comment block stays where it was.
        next = [...lines, ...fieldLines(key, kept, undefined)];
    } else {
        // The key's extent: its own line, then every indented line under it (blank lines inside a block list included).
        let last = at;
        for (let j = at + 1; j < lines.length; j++) {
            const line = lines[j] ?? "";
            if (line.trim() === "") {
                continue;
            }
            if (!/^[ \t]/.test(line)) {
                break;
            }
            last = j;
        }
        next = [...lines.slice(0, at), ...(kept.length === 0 ? [] : fieldLines(key, kept, lines.slice(at, last + 1))), ...lines.slice(last + 1)];
    }
    const body = content.slice(match[0].length);
    if (next.every((line) => line.trim() === "")) {
        return body;
    }
    return `${content.slice(0, innerStart)}${next.join(newline)}${content.slice(innerStart + inner.length)}`;
};

// A field's lines in the shape it was already written in, if it was.
const fieldLines = (key: string, values: readonly string[], was: readonly string[] | undefined): string[] => {
    const inline = was === undefined ? undefined : (keyLine(was[0] ?? "")?.[1] ?? "");
    if (inline === "" && was !== undefined && was.length > 1) {
        const indent = /^[ \t]*-[ \t]*/.exec(was.find((line) => blockItem(line) !== undefined) ?? "")?.[0] ?? "  - ";
        return [`${key}:`, ...values.map((value) => `${indent}${emit(value)}`)];
    }
    if (values.length === 1 && !(inline?.startsWith("[") ?? false)) {
        return [`${key}: ${emit(values[0] ?? "")}`];
    }
    return [`${key}: [${values.map(emit).join(", ")}]`];
};

// The body replaced, the header (fences and all) kept exactly as it is.
export const setBody = (content: string, body: string): string => {
    const match = FRONTMATTER.exec(content);
    return `${match === null ? "" : match[0]}${body}`;
};

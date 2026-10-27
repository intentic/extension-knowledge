import { describe, expect, it } from "vitest";
import { formatFrontmatter, parseFrontmatter, setBody, setField } from "./frontmatter.js";

const fields = (content: string): Record<string, readonly string[]> => Object.fromEntries(parseFrontmatter(content).fields);

describe(`parseFrontmatter`, () => {
    it(`reads scalars, flow lists and block lists into one shape`, () => {
        expect(
            fields(`---
type: person
title: "Ada Lovelace"
aliases: [Ada, "Countess Lovelace"]
tags:
  - colleague
  - math
---
body`),
        ).toEqual({
            type: [`person`],
            title: [`Ada Lovelace`],
            aliases: [`Ada`, `Countess Lovelace`],
            tags: [`colleague`, `math`],
        });
    });

    it(`keeps the body byte-for-byte, so an edit to one field never reflows the prose`, () => {
        const body = `# Ada\n\nMet at the review.\n\n  indented line\n`;
        expect(parseFrontmatter(`---\ntype: person\n---\n${body}`).body).toBe(body);
    });

    it(`treats a file with no header as all body: the common case for a note somebody just started`, () => {
        const parsed = parseFrontmatter(`Just a thought.`);
        expect(parsed.present).toBe(false);
        expect(parsed.body).toBe(`Just a thought.`);
        expect([...parsed.fields]).toEqual([]);
    });

    /* Frontmatter preserves scalar text literally; it cannot apply YAML coercions. */
    it(`leaves values that YAML would coerce exactly as written`, () => {
        expect(
            fields(`---
answer: no
version: 1.0
released: 2026-08-09
country: NO
---
`),
        ).toEqual({ answer: [`no`], version: [`1.0`], released: [`2026-08-09`], country: [`NO`] });
    });

    it(`splits a flow list on commas outside quotes only`, () => {
        expect(fields(`---\naliases: ["Lovelace, Ada", Ada]\n---\n`)).toEqual({ aliases: [`Lovelace, Ada`, `Ada`] });
    });

    it(`keeps a # inside a value: tags are written with one, and this is not a comment introducer`, () => {
        expect(fields(`---\ntags: [#colleague]\nnote: red # not a comment\n---\n`)).toEqual({ tags: [`#colleague`], note: [`red # not a comment`] });
    });

    it(`skips a full-line comment`, () => {
        expect(fields(`---\n# who this is\ntype: person\n---\n`)).toEqual({ type: [`person`] });
    });

    it(`reports a key it cannot read instead of guessing at it`, () => {
        const parsed = parseFrontmatter(`---\ntype: person\nemployment:\n  company: Acme\n  since: 2020\n---\n`);
        expect(parsed.unreadable).toEqual([`employment`]);
        expect([...parsed.fields]).toEqual([[`type`, [`person`]]]);
    });

    it(`survives a mangled header with the note intact rather than throwing`, () => {
        expect(() => parseFrontmatter(`---\n: : :\n[[[\n---\nbody`)).not.toThrow();
        expect(parseFrontmatter(`---\n: : :\n---\nbody`).body).toBe(`body`);
    });

    it(`tolerates windows line endings, which a synced knowledge base will have`, () => {
        expect(fields(`---\r\ntype: person\r\n---\r\nbody`)).toEqual({ type: [`person`] });
    });

    it(`reads long whitespace around keys and block items without regex backtracking`, () => {
        const tabs = "\t".repeat(50_000);
        expect(fields(`---\nname:${tabs}Ada\ntags:\n\t-${tabs}colleague\n---\n`)).toEqual({ name: [`Ada`], tags: [`colleague`] });
    });
});

describe(`formatFrontmatter`, () => {
    it(`round-trips through the parser unchanged`, () => {
        const written = new Map([
            [`type`, [`person`]],
            [`aliases`, [`Ada`, `Countess Lovelace`]],
            [`works_on`, [`[[Intentic]]`]],
        ]);
        const parsed = parseFrontmatter(formatFrontmatter(written, `Met at the review.`));
        expect(Object.fromEntries(parsed.fields)).toEqual({
            type: [`person`],
            aliases: [`Ada`, `Countess Lovelace`],
            works_on: [`[[Intentic]]`],
        });
        expect(parsed.body).toBe(`Met at the review.`);
    });

    it(`writes a single value as a scalar, the way a person would`, () => {
        expect(formatFrontmatter(new Map([[`type`, [`person`]]]), ``)).toContain(`type: person`);
    });

    it(`quotes only what would otherwise change meaning`, () => {
        const out = formatFrontmatter(
            new Map([
                [`plain`, [`Ada Lovelace`]],
                [`link`, [`[[Intentic]]`]],
            ]),
            ``,
        );
        expect(out).toContain(`plain: Ada Lovelace`);
        expect(out).toContain(`link: "[[Intentic]]"`);
    });

    it(`drops a key with no values rather than writing an empty one`, () => {
        expect(formatFrontmatter(new Map([[`tags`, []]]), `body`)).toBe(`---\n\n---\nbody`);
    });
});

describe(`setField`, () => {
    const note = `---
type: person
# who she works for
employer: Acme
aliases: [Ada]
tags:
  - colleague
  - reviewer
works_on: ["[[Storefront]]"]
---
Reviews every schema change.
`;

    it(`rewrites that one key's line and leaves every other byte of the file alone`, () => {
        expect(setField(note, `employer`, [`Initech`])).toBe(note.replace(`employer: Acme`, `employer: Initech`));
    });

    it(`keeps a list in the shape it was written: flow stays flow, a block list stays a block list`, () => {
        expect(setField(note, `aliases`, [`Ada`, `Countess Lovelace`])).toContain(`aliases: [Ada, Countess Lovelace]\n`);
        expect(setField(note, `tags`, [`colleague`, `math`])).toContain(`tags:\n  - colleague\n  - math\nworks_on:`);
    });

    it(`quotes a link, so the parser reads back exactly what was written`, () => {
        const written = setField(note, `works_on`, [`[[Storefront]]`, `[[Checkout API]]`]);
        expect(parseFrontmatter(written).fields.get(`works_on`)).toEqual([`[[Storefront]]`, `[[Checkout API]]`]);
    });

    it(`adds a new key last and takes a key out, block list and all, when it has no values`, () => {
        expect(setField(note, `timezone`, [`Europe/Lisbon`])).toContain(`works_on: ["[[Storefront]]"]\ntimezone: Europe/Lisbon\n---\n`);
        const without = setField(note, `tags`, []);
        expect(without).not.toContain(`colleague`);
        expect(parseFrontmatter(without).fields.get(`works_on`)).toEqual([`[[Storefront]]`]);
        expect(parseFrontmatter(without).body).toBe(`Reviews every schema change.\n`);
    });

    it(`gives a file with no header one, and drops a header left with nothing in it`, () => {
        expect(setField(`Just a thought.`, `type`, [`term`])).toBe(`---\ntype: term\n---\nJust a thought.`);
        expect(setField(`---\ntype: term\n---\nJust a thought.`, `type`, [])).toBe(`Just a thought.`);
        expect(setField(`Just a thought.`, `type`, [])).toBe(`Just a thought.`);
    });

    it(`keeps a file's CRLF line endings`, () => {
        expect(setField(`---\r\ntype: person\r\nemployer: Acme\r\n---\r\nbody`, `employer`, [`Initech`])).toBe(
            `---\r\ntype: person\r\nemployer: Initech\r\n---\r\nbody`,
        );
    });
});

describe(`setBody`, () => {
    it(`replaces the prose and keeps the header exactly as written`, () => {
        expect(setBody(`---\ntype: person # kept\n---\nold`, `new\n`)).toBe(`---\ntype: person # kept\n---\nnew\n`);
        expect(setBody(`old`, `new`)).toBe(`new`);
    });
});

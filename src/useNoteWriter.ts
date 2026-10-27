import { messageOr } from "@intentic/extension-ui";
import { reactive, ref, type Ref } from "vue";

// EVERY CHANGE MADE ON A NOTE, ONE AFTER ANOTHER, EACH ON THE FILE AS THE ONE BEFORE LEFT IT. The panel changes a note a
// value at a time (a fact, the kind, the prose as it is typed), and each change is a whole-file write. Built on what the
// server last said, two quick changes would each undo the other; so this keeps, per note, the file as this panel last
// knew it (the server's copy, or what it just wrote over that), and runs the changes in order on it. Kept by the pane,
// which outlives the note it shows, so a write that is still on its way when another note is opened lands on its own.

export interface NoteWriter {
    /** The file as this panel last knew it, per note: newer than the server's copy while a write has not been read back. */
    readonly known: ReadonlyMap<string, string>;
    /** Prose that did not reach the file, per note, so leaving the note and coming back does not lose it. */
    readonly unsaved: Map<string, string>;
    /** The server's copy of a note arrived. Ignored while a change to that note is still on its way. */
    readonly seen: (path: string, content: string) => void;
    /** Change one note: `change` turns the file as it stands into the file as it should be. False when it was not written. */
    readonly change: (path: string, change: (content: string) => string) => Promise<boolean>;
    readonly writing: Readonly<Ref<boolean>>;
    readonly error: Ref<string | undefined>;
}

export const useNoteWriter = (write: (path: string, content: string) => Promise<unknown>): NoteWriter => {
    const known = reactive(new Map<string, string>());
    const unsaved = reactive(new Map<string, string>());
    const waiting = new Map<string, number>();
    const writing = ref(false);
    const error = ref<string | undefined>(undefined);
    let queue: Promise<unknown> = Promise.resolve();

    const seen = (path: string, content: string): void => {
        if ((waiting.get(path) ?? 0) === 0) {
            known.set(path, content);
        }
    };

    const change = (path: string, change: (content: string) => string): Promise<boolean> => {
        waiting.set(path, (waiting.get(path) ?? 0) + 1);
        const run = queue.then(async () => {
            try {
                const base = known.get(path);
                if (base === undefined) {
                    return false;
                }
                const next = change(base);
                if (next === base) {
                    return true;
                }
                writing.value = true;
                error.value = undefined;
                await write(path, next);
                known.set(path, next);
                return true;
            } catch (failure) {
                error.value = messageOr(failure, `Could not save the note.`);
                return false;
            } finally {
                writing.value = false;
                const left = (waiting.get(path) ?? 1) - 1;
                if (left === 0) {
                    waiting.delete(path);
                } else {
                    waiting.set(path, left);
                }
            }
        });
        queue = run;
        return run;
    };

    return { known, unsaved, seen, change, writing, error };
};

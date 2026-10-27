<!-- What the note says, read and written in the same place and the same type: the prose is the document under the caret, its
     links still links, and it writes itself a moment after the typing stops and once more on the way out. Keyed by the note
     it shows, so the last words written on one note are written to that note, whichever is open by the time they land. -->
<script setup lang="ts">
import { MarkdownDocument, useDevice } from "@intentic/extension-ui";
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch, watchEffect } from "vue";

const { path, body, unsaved, saving, decorate, resolve } = defineProps<{
    path: string;
    /** The prose as the file has it, without its header. */
    body: string;
    /** Prose of this note's that did not reach the file, put back where it was left. */
    unsaved?: string;
    saving: boolean;
    /** A pass over the rendered prose: turns its `[[links]]` into presses that open their note. */
    decorate: (fragment: DocumentFragment) => void;
    /** A link's target to the note it names; undefined when nobody has written that note yet. */
    resolve: (target: string) => string | undefined;
}>();
const emit = defineEmits<{ write: [path: string, text: string]; open: [path: string] }>();

// The blank lines between the header and the first word are the file's layout, not the prose: the document starts at its
// first word (a document opening on a blank line is drawn as raw source) and a write puts them back, with the ending the
// file had.
const BLANK_START = /^(?:[ \t]*\r?\n)+/u;
const lead = computed(() => BLANK_START.exec(body)?.[0] ?? ``);
const prose = computed(() => body.slice(lead.value.length));

// The text on screen: seeded from the file, following a change made elsewhere (an agent's write) only while it holds nothing of
// the reader's own. The surface ends its text in the gap after its last block, so "nothing of its own" forgives the ends.
const text = ref((unsaved ?? body).replace(BLANK_START, ``));
watch(prose, (next, before) => {
    if (text.value.trim() === before.trim()) {
        text.value = next;
    }
});
// What "unsaved" is measured against: a text that differs from the file only at its ends is the file.
const onDisk = computed(() => (text.value.trim() === prose.value.trim() ? text.value : prose.value));
// Clicking into a note and out again writes nothing.
const write = (value: string): void => {
    if (value.trim() !== prose.value.trim()) {
        emit(`write`, path, `${lead.value}${value.trim()}${/\s*$/u.exec(body)?.[0] ?? ``}`);
    }
};

// A phone writes markdown as its source (the kit's choice for reliable touch editing), which reads far worse than the
// note. So there it reads rendered, and a tap on the text puts the source under the finger; leaving renders it again. A
// pointer has the rendered surface that takes a caret, so there it is always live.
const { mobile } = useDevice();
const box = ref<HTMLElement | null>(null);
const touching = ref(false);
const editable = computed(() => !mobile.value || touching.value);

// A note's link is a press that opens it, while reading and while writing alike (the caret can still go into its words
// with the arrow keys): `data-kb` where it is drawn rendered (knowledgeNote.ts), `data-md-wiki` where the document under the
// caret draws it. One to a note nobody has written opens nothing, and a press there puts the caret in it. On a phone, a tap
// elsewhere on the text is a tap to write.
const press = (event: MouseEvent): void => {
    const target = event.target instanceof Element ? event.target : undefined;
    const wiki = target?.closest<HTMLElement>(`[data-md-wiki]`)?.dataset[`mdWiki`];
    const link = target?.closest<HTMLElement>(`[data-kb]`)?.dataset[`kb`] ?? (wiki === undefined ? undefined : resolve(wiki));
    if (link !== undefined) {
        event.preventDefault();
        emit(`open`, link);
        return;
    }
    if (!mobile.value || touching.value || window.getSelection()?.toString() || target?.closest(`a, button`)) {
        return;
    }
    touching.value = true;
    void nextTick(() => box.value?.querySelector(`textarea`)?.focus());
};
// The document draws a `[[link]]` as a link and knows nothing of what it names, so each one it draws (on every rebuild of a
// block) is told here what a reader of the note would see: where it goes, or that nobody has written that note yet, drawn
// unfinished as the rendered note draws it. Only attributes change, never the text, which is the file.
const markLinks = (): void => {
    for (const link of box.value?.querySelectorAll<HTMLElement>(`a[data-md-wiki]`) ?? []) {
        const name = link.dataset[`mdWiki`] ?? ``;
        const written = resolve(name) !== undefined;
        link.title = written ? `Open ${name}` : `No note for "${name}" yet`;
        link.style.cursor = written ? `pointer` : ``;
        link.style.color = written ? `` : `var(--color-subtle)`;
        link.style.textDecoration = written ? `` : `underline dotted`;
    }
};
let watching: MutationObserver | undefined;
onMounted(() => {
    watching = new MutationObserver(markLinks);
    if (box.value !== null) {
        watching.observe(box.value, { childList: true, subtree: true });
    }
    // The document lays out its blocks as it mounts, before this does, so its first drawing is marked here, not observed.
    markLinks();
});
onBeforeUnmount(() => watching?.disconnect());
// Run again whenever what `resolve` reads changes: a note written since, or this note's links read late.
watchEffect(markLinks, { flush: `post` });

const leaveTouch = (event: FocusEvent): void => {
    const next = event.relatedTarget instanceof Node ? event.relatedTarget : null;
    if (mobile.value && !box.value?.contains(next)) {
        touching.value = false;
    }
};
</script>

<template>
    <div ref="box" class="px-5 py-4" style="--prose-measure: 74ch" @click="press" @focusout="leaveTouch">
        <MarkdownDocument
            v-model="text"
            :editable="editable"
            save="auto"
            :stored="onDisk"
            :saving="saving"
            :decorate="decorate"
            label="The note"
            placeholder="Write the note."
            @save="write"
        />
    </div>
</template>

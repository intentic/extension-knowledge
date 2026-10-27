<!-- One property's value, changed where it is read. A plain value IS its field. A value that links to other notes reads as
     those links, each a press that opens its note, laid over the same field: a press beside a link puts the caret there, the
     links give way to the same words as text, and a name typed into a row of links becomes a link. Nothing swaps, so nothing
     moves; only the links' colour goes while the caret is in it. -->
<script setup lang="ts">
import { computed, ref } from "vue";
import InPlaceText from "./InPlaceText.vue";

const {
    values,
    list,
    label,
    resolve,
    placeholder = ``,
} = defineProps<{
    values: readonly string[];
    /** Several values, comma-separated where it is typed. A single fact keeps its commas as part of it. */
    list: boolean;
    label: string;
    /** A link's target to the note it names; undefined when nobody has written that note yet. */
    resolve: (target: string) => string | undefined;
    placeholder?: string;
}>();
const emit = defineEmits<{ commit: [values: string[]]; open: [path: string] }>();

// `[[target]]` or `[[target|label]]`, as the engine reads them.
const LINK = /\[\[([^\][|]+)(?:\|([^\]]+))?\]\]/g;
const readingOf = (value: string): string => value.replace(LINK, (_whole, target: string, named?: string) => (named ?? target).trim());

const linked = computed(() => values.some((value) => value.includes(`[[`)));
const shown = computed(() => values.map(readingOf).join(`, `));

interface Piece {
    readonly text: string;
    readonly target?: string;
    readonly path?: string;
}
const piecesOf = (value: string): Piece[] => {
    const pieces: Piece[] = [];
    let cursor = 0;
    for (const match of value.matchAll(LINK)) {
        pieces.push({ text: value.slice(cursor, match.index) });
        const target = (match[1] ?? ``).trim();
        pieces.push({ text: (match[2] ?? target).trim(), target, path: resolve(target) });
        cursor = match.index + match[0].length;
    }
    pieces.push({ text: value.slice(cursor) });
    return pieces.filter((piece) => piece.text !== `` || piece.target !== undefined);
};
const read = computed(() => values.map(piecesOf));

// Only the field's own focus hides the links: a link takes focus as it is pressed, and hiding it then would eat the press.
const writing = ref(false);

const commit = (typed: string): void => {
    const items = list || linked.value ? typed.split(`,`).map((item) => item.trim()).filter((item) => item !== ``) : typed === `` ? [] : [typed];
    // A value that reads as one already there keeps how it was written (a link's target, its label, its quotes); a new name
    // in a row of links is a link.
    const written = new Map(values.map((value) => [readingOf(value), value]));
    emit(
        `commit`,
        items.map((item) => written.get(item) ?? (linked.value && !item.includes(`[[`) ? `[[${item}]]` : item)),
    );
};
</script>

<template>
    <span class="grid min-w-0 grid-cols-1 grid-rows-1">
        <span class="col-start-1 row-start-1 min-w-0" @focusin="writing = true" @focusout="writing = false">
            <InPlaceText
                :value="shown"
                :label="label"
                :placeholder="placeholder"
                :class="linked && !writing ? `text-transparent` : ``"
                @commit="commit"
            />
        </span>
        <!-- Laid over the field and let through to it, but for the links themselves. -->
        <span v-if="linked && !writing" class="pointer-events-none col-start-1 row-start-1 min-w-0 truncate">
            <template v-for="(pieces, at) in read" :key="at">
                <template v-if="at > 0">, </template>
                <template v-for="(piece, index) in pieces" :key="index">
                    <button v-if="piece.path" type="button" class="pointer-events-auto text-link hover:underline" @click="emit(`open`, piece.path)">
                        {{ piece.text }}
                    </button>
                    <span
                        v-else-if="piece.target !== undefined"
                        class="text-subtle underline decoration-dotted underline-offset-2"
                        :title="`No note for &quot;${piece.target}&quot; yet`"
                        >{{ piece.text }}</span
                    >
                    <template v-else>{{ piece.text }}</template>
                </template>
            </template>
        </span>
    </span>
</template>

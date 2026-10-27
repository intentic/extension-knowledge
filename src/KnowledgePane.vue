<script setup lang="ts">
import {
    freshness,
    formatBytes,
    formatTimestamp,
    Icon,
    messageOr,
    NoteEditor,
    SkeletonSnapshot,
    useLoadingReveal,
    ui,
    vSkeletonSource,
} from "@intentic/extension-ui";
import { computed, ref, toRef, watch } from "vue";
import InPlaceText from "./InPlaceText.vue";
import { linkifyNoteRefs } from "./knowledgeNote";
import NoteBody from "./NoteBody.vue";
import NoteGraph from "./NoteGraph.vue";
import NoteProperties from "./NoteProperties.vue";
import NoteSkeleton from "./NoteSkeleton.vue";
import NoteType from "./NoteType.vue";
import { parseFrontmatter, setBody, setField } from "./notes/frontmatter";
import { useNote, useNoteMutations, useOverview } from "./useKnowledge";
import { useNoteWriter } from "./useNoteWriter";

// One knowledge note: what it is, what it says, what it connects to, each changed where it is read. Its name is renamed in
// place, its kind is its badge, every header property is a row whose value is its own field, and the prose is a document
// that takes the caret and writes itself. Each change rewrites only its own lines of the file (notes/frontmatter.ts), so
// the header the panel does not show, comments and order included, comes back as it was. NoteEditor is the frame (copy,
// delete, the map toggle's place, errors); nothing in it turns into anything else to be written in.

const { path } = defineProps<{ path: string }>();
const emit = defineEmits<{ open: [path: string]; filter: [path: string]; forgotten: [] }>();

const { note, error: noteError, isLoading } = useNote(toRef(() => path));
// Gated, since stepping through the list with the arrow keys opens a note per keystroke; keyed on the note, so the next
// one starts a fresh wait instead of inheriting the last one's outline.
const outline = useLoadingReveal(
    isLoading,
    computed(() => path),
);
const { save, remove } = useNoteMutations();
const { overview } = useOverview();
const view = ref<`read` | `map`>(`read`);

// THE FILE AS IT STANDS. The writer's copy runs ahead of the server's while a change is on its way back.
const writer = useNoteWriter((at, content) => save.mutateAsync({ path: at, content }));
watch(
    note,
    (current) => {
        if (current !== undefined) {
            writer.seen(current.summary.path, current.content);
        }
    },
    { immediate: true },
);
const content = computed(() => writer.known.get(path) ?? note.value?.content ?? ``);
const header = computed(() => parseFrontmatter(content.value));
const title = computed(() => header.value.fields.get(`title`)?.[0] ?? note.value?.summary.title ?? `…`);
const type = computed(() => header.value.fields.get(`type`)?.[0]);
// The vocabulary's kinds first, as the ones agreed on, then any other the knowledge base already uses.
const kinds = computed(() => [...new Set([...(overview.value?.vocabulary.types ?? []), ...(overview.value?.types ?? []).map((kind) => kind.name)])]);
const taken = computed(() => [...header.value.fields.keys(), ...header.value.unreadable]);

const change = (key: string, values: readonly string[]): void => void writer.change(path, (file) => setField(file, key, values));
// A note is linked to by its name, so a rename keeps the old one as an alias: every `[[old name]]` written elsewhere still
// arrives here, and the alias row says why. One write, so the two never land apart.
const rename = (name: string): void => {
    const before = title.value;
    const aliases = header.value.fields.get(`aliases`) ?? [];
    const keep = name !== `` && before.toLowerCase() !== name.toLowerCase() && !aliases.some((alias) => alias.toLowerCase() === before.toLowerCase());
    void writer.change(path, (file) => {
        const named = setField(file, `title`, name === `` ? [] : [name]);
        return keep ? setField(named, `aliases`, [...aliases, before]) : named;
    });
};
const retype = (kind: string | undefined): void => change(`type`, kind === undefined ? [] : [kind]);
// Prose that did not reach the file is kept until it does, so leaving the note and coming back finds it where it was left.
const writeBody = (at: string, text: string): void => {
    writer.unsaved.set(at, text);
    void writer
        .change(at, (file) => setBody(file, text))
        .then((written) => {
            if (written && writer.unsaved.get(at) === text) {
                writer.unsaved.delete(at);
            }
        });
};

// Resolution is the backend's answer already; an unresolved target is unwritten, drawn unfinished, not broken.
const resolved = computed(() => new Map((note.value?.linksTo ?? []).map((link) => [link.title, link.path])));
const resolve = (target: string): string | undefined => resolved.value.get(target);
const decorate = (fragment: DocumentFragment): void => linkifyNoteRefs(fragment, resolve);

// Deleting: the frame's own confirmation, then the file.
const confirming = ref(false);
const removeError = ref<string | undefined>(undefined);
const forget = async (): Promise<void> => {
    removeError.value = undefined;
    try {
        await remove.mutateAsync({ path });
        confirming.value = false;
        emit(`forgotten`);
    } catch (failure) {
        removeError.value = messageOr(failure, `Could not delete the note.`);
    }
};
// Another note: back to its words, no confirmation or refusal carried over from the last one.
watch(
    () => path,
    () => {
        view.value = `read`;
        confirming.value = false;
        removeError.value = undefined;
        writer.error.value = undefined;
    },
);
</script>

<template>
    <!-- One element: the note is the pane, so the frame's length is the note's, not clamped for another section. No
         `loading`: the frame's own is a "Loading…" line, and the wait is drawn below in the note's shape instead. The frame
         never edits on its own (`editing` and `writable` off): everything below is written where it stands. -->
    <NoteEditor
        v-model:confirming="confirming"
        :source="content"
        :raw="content"
        :editing="false"
        :writable="false"
        paged
        :title="title"
        :saving="writer.writing.value"
        :removing="remove.isPending.value"
        :error="noteError ?? writer.error.value ?? removeError"
        @remove="forget"
    >
        <template #lead>
            <Icon name="file" class="shrink-0 text-base text-muted" />
        </template>
        <template v-if="note" #title>
            <InPlaceText :key="path" :value="title" label="Title" fit @commit="rename" />
        </template>
        <template #badges>
            <NoteType v-if="note" :type="type" :kinds="kinds" @pick="retype" />
        </template>
        <template #meta>
            <span class="truncate font-mono">{{ path }}</span>
            <template v-if="note">
                <span aria-hidden="true">·</span>
                <span>{{ formatBytes(note.summary.sizeBytes) }}</span>
                <span aria-hidden="true">·</span>
                <span :title="formatTimestamp(note.summary.modifiedAt)">edited {{ freshness(note.summary.modifiedAt) }}</span>
            </template>
        </template>

        <!-- Left of Copy/Delete since it's about the note, not the file. -->
        <template #actions>
            <button
                type="button"
                :class="ui.iconButton(`h-7 w-7`)"
                :aria-pressed="view === `map`"
                :aria-label="view === `map` ? `Back to the note` : `Show what this note connects to`"
                v-tooltip.top="view === `map` ? `Back to the note` : `Map: what this note connects to`"
                @click="view = view === `map` ? `read` : `map`"
            >
                <Icon :name="view === `map` ? `eye` : `sitemap`" />
            </button>
        </template>

        <template #confirm> Delete "{{ title }}"? Anything that links to it becomes a link to a note nobody has written. </template>

        <NoteGraph v-if="view === `map`" :path="path" @open="emit(`open`, $event)" />

        <!-- This note as it last read, per note since one note's length says nothing about the next; hand-drawn prose
             before it has been seen. Nothing before the reveal: a quick read paints no outline. -->
        <template v-else-if="isLoading">
            <SkeletonSnapshot v-if="outline" :of="`knowledge.note:${path}`" label="Reading the note…">
                <NoteSkeleton />
            </SkeletonSnapshot>
        </template>

        <!-- One box for the note's body, so its imprint has a root; a flex column, as the frame laid these out itself. -->
        <div v-else-if="note" v-skeleton-source="`knowledge.note:${path}`" class="flex flex-col">
            <NoteProperties
                :key="path"
                class="px-5 pt-4"
                :fields="header.fields"
                :taken="taken"
                :resolve="resolve"
                @change="change"
                @open="emit(`open`, $event)"
            />
            <NoteBody
                :key="path"
                :path="path"
                :body="header.body"
                :unsaved="writer.unsaved.get(path)"
                :saving="writer.writing.value"
                :decorate="decorate"
                :resolve="resolve"
                @write="writeBody"
                @open="emit(`open`, $event)"
            />

            <!-- A see-also, ruled off rather than boxed: a bordered card at a document's end reads as a different document. -->
            <div v-if="note.linkedFrom.length > 0" class="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line-subtle px-5 py-3 text-xs">
                <span class="text-2xs uppercase tracking-wide text-subtle">Linked from</span>
                <span v-for="(link, i) in note.linkedFrom" :key="`in-${link.relation ?? ``}-${link.title}-${i}`" class="flex items-baseline gap-1">
                    <span v-if="link.relation" class="text-2xs text-subtle">{{ link.relation }}</span>
                    <button v-if="link.path" type="button" class="text-link hover:underline" @click="emit(`open`, link.path)">
                        {{ link.title }}
                    </button>
                </span>
                <!-- "Everything about this note" differs from "what links to it"; this re-aims the list beside the pane. -->
                <button type="button" :class="ui.linkButton(`ml-auto shrink-0 text-2xs`)" @click="emit(`filter`, path)">
                    Show these in the list
                </button>
            </div>
        </div>
    </NoteEditor>
</template>

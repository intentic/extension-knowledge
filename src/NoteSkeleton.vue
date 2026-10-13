<!-- Loading placeholder for a knowledge note: the first-visit fallback inside a <SkeletonSnapshot>, which draws the note
     as it last looked once it has been seen. -->
<script setup lang="ts">
const { framed = false } = defineProps<{
    /** Draw the pane's card and header too: before the first search lands there is no pane yet, only the one about to open. */
    framed?: boolean;
}>();

// Fixed, uneven widths walked in order: prose wraps unevenly, and an outline that reshuffled on re-render would flicker.
const PARAGRAPHS = [
    [`w-full`, `w-11/12`, `w-full`, `w-2/3`],
    [`w-full`, `w-5/6`, `w-1/2`],
] as const;
</script>

<template>
    <!-- aria-busy, not aria-hidden: a screen reader should hear "loading", not an empty note. -->
    <div :class="framed ? `@container flex flex-col rounded-lg bg-card shadow-sm` : `flex flex-col`" role="status" aria-busy="true">
        <span class="sr-only">Reading the note…</span>

        <!-- The paged frame's two bands: name and actions, then the meta line. Bar heights match their text so nothing jumps. -->
        <template v-if="framed">
            <div
                class="flex flex-col gap-2 border-b border-line-subtle px-4 py-2.5 @xl:flex-row @xl:items-start @xl:justify-between @xl:gap-3"
                aria-hidden="true"
            >
                <div class="flex h-5 items-center gap-2">
                    <span class="skeleton block h-4 w-4 shrink-0" />
                    <span class="skeleton block h-3.5 w-40" />
                </div>
                <div class="flex shrink-0 items-center gap-1.5">
                    <span v-for="action in 4" :key="action" class="skeleton block h-7 w-7" />
                </div>
            </div>
            <div class="flex flex-col gap-1 border-b border-line-subtle px-4 py-2.5" aria-hidden="true">
                <span class="flex h-4 items-center"><span class="skeleton block h-2.5 w-56 max-w-full" /></span>
            </div>
        </template>

        <!-- The note's own padding (`px-5 py-4`), so the outline sits where the prose will. -->
        <div class="flex flex-col gap-5 px-5 py-4" aria-hidden="true">
            <div v-for="(paragraph, block) in PARAGRAPHS" :key="block" class="flex flex-col gap-3">
                <span v-for="(width, line) in paragraph" :key="line" class="skeleton block h-2.5" :class="width" />
            </div>
        </div>
    </div>
</template>

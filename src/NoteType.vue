<!-- The note's kind, changed where it is read: the badge itself is the press, and the kinds the vocabulary agreed on open beside
     it, with a field for one it has not agreed on yet. A pick writes the `type:` line and nothing else. -->
<script setup lang="ts">
import { Icon, ResponsiveOverlay, StatusBadge, type StatusVariant, ui } from "@intentic/extension-ui";
import { computed, ref } from "vue";
import { dotOfType, toneOfType } from "./knowledgeNote";

const { type, kinds } = defineProps<{
    type: string | undefined;
    /** The vocabulary's kinds, then any other the knowledge base already uses. */
    kinds: readonly string[];
}>();
const emit = defineEmits<{ pick: [type: string | undefined] }>();

const anchor = ref<HTMLElement>();
const open = ref(false);
const typed = ref(``);
const offered = computed(() => [...new Set([...(type === undefined ? [] : [type]), ...kinds])]);

const pick = (next: string | undefined): void => {
    open.value = false;
    typed.value = ``;
    if (next !== type) {
        emit(`pick`, next);
    }
};
const pickTyped = (): void => {
    const next = typed.value.trim();
    if (next !== ``) {
        pick(next);
    }
};
</script>

<template>
    <button
        ref="anchor"
        type="button"
        class="-my-0.5 shrink-0 rounded-full p-0.5 transition-colors hover:bg-content/5"
        aria-haspopup="dialog"
        :aria-expanded="open"
        :aria-label="type === undefined ? `Give it a kind` : `Kind: ${type}. Change it`"
        @click="open = true"
    >
        <StatusBadge v-if="type !== undefined" :variant="toneOfType(type) as StatusVariant" size="xs" :label="type" />
        <span v-else class="px-1 text-2xs text-subtle">no kind</span>
    </button>

    <ResponsiveOverlay v-model="open" :anchor="anchor" header="Kind" panel-class="w-pop-sm p-1.5">
        <div class="flex flex-col">
            <button
                v-for="kind in offered"
                :key="kind"
                type="button"
                class="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-content transition-colors hover:bg-content/5"
                :aria-pressed="kind === type"
                @click="pick(kind)"
            >
                <span class="size-2 shrink-0 rounded-full" :class="dotOfType(kind)" aria-hidden="true" />
                <span class="min-w-0 flex-1 truncate">{{ kind }}</span>
                <Icon v-if="kind === type" name="check" class="text-2xs text-muted" />
            </button>
            <button
                v-if="type !== undefined"
                type="button"
                class="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-muted transition-colors hover:bg-content/5"
                @click="pick(undefined)"
            >
                <span class="size-2 shrink-0" aria-hidden="true" />No kind
            </button>
            <form class="mt-1 border-t border-line-subtle px-1 pt-2" @submit.prevent="pickTyped">
                <input v-model="typed" type="text" aria-label="Another kind" placeholder="Another kind" autocomplete="off" spellcheck="false" :class="ui.input({ size: `sm` }, `w-full`)" />
            </form>
        </div>
    </ResponsiveOverlay>
</template>

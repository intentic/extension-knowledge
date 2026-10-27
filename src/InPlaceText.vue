<!-- A value that is its own field: it reads as the text it is, where it stands, and a press puts the caret in it. Enter or
     leaving it writes it, Esc puts back what the file says. Nothing frames it at rest and nothing turns into it, so nothing
     around it moves when it is written in; a wash under the pointer is the only sign it takes a caret. -->
<script setup lang="ts">
import { ref, watch } from "vue";

const {
    value,
    label,
    placeholder = ``,
    fit = false,
} = defineProps<{
    value: string;
    /** What a screen reader calls the field. */
    label: string;
    placeholder?: string;
    /** As wide as its text, as a title is, rather than the whole of the box it sits in. */
    fit?: boolean;
}>();
const emit = defineEmits<{ commit: [value: string] }>();

// The text on screen: what the file says, followed while it holds nothing of the reader's own.
const text = ref(value);
watch(
    () => value,
    (next, before) => {
        if (text.value === before) {
            text.value = next;
        }
    },
);

const commit = (): void => {
    const typed = text.value.trim();
    if (typed === value.trim()) {
        text.value = value;
        return;
    }
    text.value = typed;
    emit(`commit`, typed);
};
const blurOut = (event: Event): void => {
    if (event.target instanceof HTMLElement) {
        event.target.blur();
    }
};
const putBack = (event: Event): void => {
    text.value = value;
    blurOut(event);
};

// The field's own type is the kit's 16px phone floor; here it takes the type of the line it stands in, so the text a
// reader sees at rest is the text the caret lands in.
const INHERIT = { font: `inherit` };
const FIELD = `field-bare ui-field-lit min-w-0 rounded-md px-1 transition-colors hover:bg-content/5`;
</script>

<template>
    <!-- Sized by an invisible twin of its text, so a title's field is exactly as wide as the title and only ever grows. -->
    <span v-if="fit" class="inline-grid min-w-0 max-w-full grid-cols-1 grid-rows-1 align-baseline">
        <span aria-hidden="true" class="invisible col-start-1 row-start-1 truncate whitespace-pre px-1">{{ text || placeholder }}</span>
        <input
            v-model="text"
            type="text"
            size="1"
            :aria-label="label"
            :placeholder="placeholder"
            autocomplete="off"
            spellcheck="false"
            :class="FIELD"
            class="col-start-1 row-start-1 w-full"
            :style="INHERIT"
            @blur="commit"
            @keydown.enter.prevent="blurOut"
            @keydown.esc.prevent="putBack"
        />
    </span>
    <input
        v-else
        v-model="text"
        type="text"
        :aria-label="label"
        :placeholder="placeholder"
        autocomplete="off"
        spellcheck="false"
        :class="FIELD"
        class="-mx-1 w-full"
        :style="INHERIT"
        @blur="commit"
        @keydown.enter.prevent="blurOut"
        @keydown.esc.prevent="putBack"
    />
</template>

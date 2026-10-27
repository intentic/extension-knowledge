<!-- A note's header as what it says: one row per property, in the order the file has them, each value changed where it is
     read and written back into that one line of the file. Emptying a value takes the property off; the last row adds one.
     The title and the kind are not here: they are the note's own name and badge, at the top. -->
<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import PropertyValue from "./PropertyValue.vue";

const { fields, taken, resolve } = defineProps<{
    fields: ReadonlyMap<string, readonly string[]>;
    /** Every key already in the header, including the ones this table does not show, which a new one must not repeat. */
    taken: readonly string[];
    resolve: (target: string) => string | undefined;
}>();
const emit = defineEmits<{ change: [key: string, values: string[]]; open: [path: string] }>();

// The keys that are lists by nature, so a comma typed in them separates values; any other single fact keeps its commas.
const LISTS = new Set([`aliases`, `tags`, `types`, `relations`]);
const rows = computed(() => [...fields].filter(([key]) => key !== `title` && key !== `type`));

// A NEW PROPERTY: its name, then its value; written once both are there.
const KEY = /^[A-Za-z_][\w.-]*$/;
const newKey = ref(``);
const newValue = ref(``);
const refusal = ref<string | undefined>(undefined);
const valueField = ref<HTMLInputElement | null>(null);
const toValue = (): void => void nextTick(() => valueField.value?.focus());
const add = (): void => {
    const key = newKey.value.trim();
    const value = newValue.value.trim();
    refusal.value = undefined;
    if (key === `` || value === ``) {
        return;
    }
    if (!KEY.test(key)) {
        refusal.value = `A property's name starts with a letter and holds letters, digits, _ . and - only.`;
        return;
    }
    if (taken.includes(key)) {
        refusal.value = `This note already has "${key}".`;
        return;
    }
    const values = LISTS.has(key) || value.includes(`[[`) ? value.split(`,`).map((item) => item.trim()).filter((item) => item !== ``) : [value];
    emit(`change`, key, values);
    newKey.value = ``;
    newValue.value = ``;
};
const blurOut = (event: Event): void => {
    if (event.target instanceof HTMLElement) {
        event.target.blur();
    }
};

const INHERIT = { font: `inherit` };
const FIELD = `field-bare ui-field-lit -mx-1 w-full min-w-0 rounded-md px-1 transition-colors hover:bg-content/5`;
</script>

<template>
    <!-- Quiet name, clear value, the names' column as wide as the longest; the phone's 16px floor applies to the whole table,
         not only to the field with the caret, so the text the caret lands in is the text that was read. -->
    <div class="grid grid-cols-facts gap-x-6 text-base md:text-xs">
        <div v-for="[key, values] in rows" :key="key" class="col-span-2 grid grid-cols-subgrid items-baseline border-b border-line-subtle py-1">
            <span class="truncate text-subtle">{{ key }}</span>
            <PropertyValue
                :values="values"
                :list="LISTS.has(key) || values.length > 1"
                :label="key"
                :resolve="resolve"
                placeholder="Left empty, it is removed"
                @commit="emit(`change`, key, $event)"
                @open="emit(`open`, $event)"
            />
        </div>
        <div class="col-span-2 grid grid-cols-subgrid items-baseline py-1">
            <!-- `size="1"` and a floor: a text field's own width is about twenty characters, and here it would set the width of
                 the names' column; this way the longest name does, or the placeholder if that is wider. -->
            <input
                v-model="newKey"
                type="text"
                size="1"
                class="min-w-28"
                aria-label="New property's name"
                placeholder="Add a property"
                autocomplete="off"
                spellcheck="false"
                :class="FIELD"
                :style="INHERIT"
                @keydown.enter.prevent="toValue"
                @blur="add"
            />
            <input
                ref="valueField"
                v-model="newValue"
                type="text"
                :aria-label="newKey.trim() === `` ? `New property's value` : `${newKey.trim()}'s value`"
                :placeholder="newKey.trim() === `` ? `` : `Its value`"
                autocomplete="off"
                spellcheck="false"
                :class="FIELD"
                :style="INHERIT"
                @keydown.enter.prevent="blurOut"
                @blur="add"
            />
        </div>
        <p v-if="refusal" class="col-span-2 pb-1 text-2xs text-danger" role="alert">{{ refusal }}</p>
    </div>
</template>

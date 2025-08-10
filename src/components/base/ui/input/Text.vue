<script setup lang="ts">
const { invalid } = defineProps<{ invalid: boolean }>()
const model = defineModel()
</script>

<template>
    <input
        v-model="model"
        :class="['base-input-text', { 'base-input-text--invalid': invalid }]" />
</template>

<style lang="sass">
.base-input-text
    border: 1px solid var(--gray-300)
    border-radius: .25em
    padding: .625rem .75rem

    &:focus
        outline: none
        border-color: var(--blue-500)
        box-shadow: 0 0 0 3px rgba(66, 165, 245, 0.3)

    &--invalid
        border: 1px solid var(--red-500)
</style>

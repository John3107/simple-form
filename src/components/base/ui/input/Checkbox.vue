<script setup lang="ts">
defineProps<{ name: string }>()
const model = defineModel()
</script>

<template>
    <div class="base-input-checkbox">
        <input
            type="checkbox"
            v-model="model"
            class="base-input-checkbox__input"
            name="base-checkbox"
            :id="name" />
        <label :for="name" class="base-input-checkbox__label">
            <slot />
        </label>
    </div>
</template>

<style lang="sass">
.base-input-checkbox
    display: flex
    align-items: center
    gap: .5rem

    &__input
        cursor: pointer
        appearance: none
        width: 1.5rem
        height: 1.5rem
        border: 1px solid var(--gray-300)
        border-radius: 0.25rem

        &:checked
            background-color: var(--blue-500)
            border-color: var(--blue-500)

            &::before
                content: '✓'
                position: absolute
                top: -1rem
                left: -.375rem
                transform: translate(50%, 50%)
                color: var(--surface-0)
                font-size: 1.5rem

    &__label
        cursor: pointer
</style>

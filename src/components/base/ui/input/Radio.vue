<script setup lang="ts">
defineProps<{ name: string; value: string }>()
const model = defineModel()
</script>

<template>
    <div class="base-input-radio">
        <input
            type="radio"
            v-model="model"
            class="base-input-radio__input"
            name="base-radio"
            :id="`${name}.${value}`"
            :value />
        <label :for="`${name}.${value}`" class="base-input-radio__label">
            <slot />
        </label>
    </div>
</template>

<style lang="sass">
.base-input-radio
    display: flex
    align-items: center
    gap: .5rem

    &__input
        appearance: none
        cursor: pointer
        width: 1.5rem
        height: 1.5rem
        border: 1px solid var(--gray-300)
        border-radius: 50%

        &:checked
            background-color: var(--blue-500)
            border-color: var(--blue-500)

            &::before
                content: '●'
                position: absolute
                top: -1.915rem
                left: -.6rem
                transform: translate(50%, 50%)
                color: var(--surface-0)
                font-size: 2.25rem

    &__label
        cursor: pointer
</style>

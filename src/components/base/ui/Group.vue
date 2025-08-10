<script setup lang="ts">
defineProps<{
    label?: string
    required?: boolean
}>()
</script>

<template>
    <div :class="['base-ui-group', { 'base-ui-group--required': required }]">
        <div class="base-ui-group__header" v-if="label">
            <div class="base-ui-group__label">
                {{ label }}
            </div>
        </div>
        <slot />
    </div>
</template>

<style lang="sass">
.base-ui-group
    display: flex
    flex-direction: column
    gap: .5rem
    flex: 1 0 auto
    max-width: 100%
    position: relative

    $this: &

    &__label
        font-weight: bold
        line-height: 1

        &:empty
            display: none

        #{$this}--required &

            &::after
                content: '\00a0*'
                color: var(--red-500)

    &__header
        display: flex
        gap: .25rem
        align-items: center
</style>

<script setup lang="ts">
import Loader from '@/components/base/ui/Loader.vue'

defineProps<{ title: string; isPending: boolean }>()
</script>
<template>
    <div class="base-ui-block">
        <div class="base-ui-block__title">
            {{ title }}
        </div>
        <slot />
        <div class="base-ui-block__action">
            <slot name="action" />
        </div>
        <Loader v-if="isPending" />
    </div>
</template>

<style lang="sass">
.base-ui-block
    display: flex
    flex-direction: column
    gap: 1rem
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.02), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)
    border-radius: 7px
    background-color: var(--surface-0)
    padding: 1.25rem
    max-width: 50rem
    position: relative

    &__title
        display: flex
        justify-content: center
        font-size: 1.25rem
        font-weight: 700

    &__action
        margin-left: auto
</style>

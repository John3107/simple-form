<script setup lang="ts">
import type { BaseFormBlock } from '@/model/base/types'
import { useField } from 'vee-validate'
import { computed } from 'vue'

const { name } = defineProps<BaseFormBlock>()
const { errorMessage } = useField(name)
const error = computed(() => errorMessage)
</script>

<template>
    <div class="base-form-block">
        <div
            v-if="label"
            :class="[
                'base-form-block__label',
                { 'base-form-block__label--required': required }
            ]">
            {{ label }}
        </div>
        <slot />
        <div v-if="error" class="base-form-block__error">
            {{ error }}
        </div>
    </div>
</template>

<style lang="sass" scoped>
.base-form-block
    display: flex
    flex-direction: column
    gap: 1rem

    &__label
        display: flex
        width: 100%
        font-weight: 700

        &--required
            &::after
                content: '\00a0*'
                color: var(--red-500)

    &__error
        color: var(--red-500)
</style>

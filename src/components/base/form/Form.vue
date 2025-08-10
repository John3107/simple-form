<script setup lang="ts">
import BaseBlock from '@/components/base/form/Block.vue'
import BaseGroup from '@/components/base/form/Group.vue'
import type { BaseForm } from '@/model/base/types'
import UiBlock from '@/components/base/ui/Block.vue'

defineProps<BaseForm>()
</script>

<template>
    <form class="base-form">
        <UiBlock :title :is-pending>
            <BaseBlock
                class="base-form__block"
                v-for="{ groups, ...attrs } of schema"
                v-bind="attrs">
                <BaseGroup v-for="group of groups" v-bind="group" />
            </BaseBlock>
            <template #action>
                <slot name="action" />
            </template>
        </UiBlock>
    </form>
</template>

<style lang="sass" scoped>
.base-form
    width: 40vw
    gap: 1.25rem
    align-items: flex-start

    &__block
        flex-direction: row
        flex-wrap: wrap
</style>

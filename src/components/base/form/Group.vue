<script setup lang="ts">
import { type BaseFormGroup } from '@/model/base/types'
import { computed } from 'vue'
import { useField } from 'vee-validate'
import UiGroup from '@/components/base/ui/Group.vue'

const { name, component, label } = defineProps<BaseFormGroup>()

const fieldName = computed(() => name)

const {
    value: model,
    errorMessage: error,
    handleBlur,
    meta,
    validate
} = useField(fieldName)

const required = computed(() => meta.required)
const valid = computed(() => meta.valid)
const touched = computed(() => meta.touched)

const validateField = () => {
    handleBlur()
    validate()
}
</script>

<template>
    <UiGroup
        :class="[
            'base-form-group',
            { [`base-form-group--${groupSize}`]: groupSize }
        ]"
        :required
        :label>
        <Component
            @blur="validateField"
            :name
            :is="component"
            :invalid="!valid && touched"
            v-bind="attrs"
            v-model.trim="model">
            {{ attrs.desc }}
        </Component>
        <div v-if="error && touched" class="base-form-group__error">
            {{ error }}
        </div>
    </UiGroup>
</template>

<style lang="sass" scoped>
.base-form-group
    flex: none
    max-width: none
    width: 100%

    &--half
        display: flex
        width: calc(50% - .5rem)

    &__error
        color: var(--red-500)

</style>

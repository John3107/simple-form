<script setup lang="ts">
import { reactive } from 'vue'
import { useForm } from 'vee-validate'
import BaseForm from '@/components/base/form/Form.vue'
import Text from '@/components/base/ui/input/Text.vue'
import Checkbox from '@/components/base/ui/input/Checkbox.vue'
import Radio from '@/components/base/ui/input/Radio.vue'
import SubmitButton from '@/components/base/ui/input/SubmitButton.vue'
import {
    UserSettingBaseFormBody,
    UserSettingMainPageType
} from '@/model/user-setting/types'
import { object, string } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import { useUserSettingApi } from '@/composables/user-setting/api'

const { createUserSetting } = useUserSettingApi()

const schema = reactive([
    {
        name: 'general',
        groups: [
            {
                label: 'Ім’я',
                component: Text,
                name: 'name',
                groupSize: 'half',
                attrs: {
                    placeholder: 'Введіть ім’я'
                }
            },
            {
                label: 'Прізвище',
                component: Text,
                name: 'surname',
                groupSize: 'half',
                attrs: {
                    placeholder: 'Введіть прізвище'
                }
            },
            {
                label: 'Логін',
                component: Text,
                name: 'login',
                groupSize: 'half',
                attrs: {
                    placeholder: 'Введіть логін'
                }
            },
            {
                label: 'Пароль',
                component: Text,
                name: 'password',
                groupSize: 'half',
                attrs: {
                    type: 'password',
                    placeholder: 'Введіть пароль'
                }
            }
        ]
    },
    {
        label: 'Операції',
        required: true,
        name: 'action',
        groups: [
            {
                component: Checkbox,
                name: 'action.create',
                attrs: {
                    desc: 'Створення'
                },
                groupSize: 'half'
            },
            {
                component: Checkbox,
                name: 'action.update',
                attrs: {
                    desc: 'Оновлення'
                },
                groupSize: 'half'
            },
            {
                component: Checkbox,
                name: 'action.move',
                attrs: {
                    desc: 'Переміщення'
                },
                groupSize: 'half'
            },
            {
                component: Checkbox,
                name: 'action.delete',
                attrs: {
                    desc: 'Видалення'
                },
                groupSize: 'half'
            }
        ]
    },
    {
        name: 'main_page',
        label: 'Головна сторінка',
        required: true,
        groups: [
            {
                component: Radio,
                name: 'main_page',
                attrs: {
                    desc: 'Склад',
                    value: UserSettingMainPageType.STORE
                }
            },
            {
                component: Radio,
                name: 'main_page',
                attrs: {
                    desc: 'Категорії',
                    value: UserSettingMainPageType.CATEGORY
                }
            },
            {
                component: Radio,
                name: 'main_page',
                attrs: {
                    desc: 'Характеристики',
                    value: UserSettingMainPageType.CHARACTERISTIC
                }
            },
            {
                component: Radio,
                name: 'main_page',
                attrs: {
                    desc: 'Продукти',
                    value: UserSettingMainPageType.PRODUCT
                }
            },
            {
                component: Radio,
                name: 'main_page',
                attrs: {
                    desc: 'Операції',
                    value: UserSettingMainPageType.OPERATION
                }
            }
        ]
    },
    {
        label: 'Графік роботи',
        name: 'work_schedule',
        groups: [
            {
                component: Checkbox,
                name: 'second_shift',
                attrs: {
                    desc: 'Робітник другої зміни'
                }
            }
        ]
    }
])

const validationSchema = toTypedSchema(
    object({
        name: string().required('Ім’я обов’язкове поле'),
        surname: string().required('Прізвище обов’язкове поле'),
        login: string().required('Логін обов’язкове поле'),
        password: string().required('Пароль обов’язкове поле'),
        action: object().test({
            test: (value) =>
                Object.keys(value).some((key: string) => value[key]),
            message: 'Оберіть щонайменше одину операцію'
        }),
        main_page: string().required(
            'Оберіть щонайменше один елемент головної сторінки'
        )
    })
)

const { handleSubmit, handleReset } = useForm<UserSettingBaseFormBody>({
    validationSchema,
    initialValues: {
        action: {
            create: false,
            update: false,
            move: false,
            delete: false
        }
    }
})
const { mutate: mutateCreateUserSetting, isPending } =
    createUserSetting(handleReset)
const submit = handleSubmit((values) => mutateCreateUserSetting(values))
</script>

<template>
    <BaseForm :schema title="Налаштування користувача" :is-pending>
        <template #action>
            <SubmitButton value="Зберегти" @click="submit" />
        </template>
    </BaseForm>
</template>

import { Component } from 'vue'

export enum RequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export interface BaseForm {
    schema: BaseFormSchema[]
    isPending: boolean
    title: string
}

export interface BaseFormSchema extends BaseFormBlock {
    groups: BaseFormGroup[]
}

export interface BaseFormGroupAttrs {
    title?: string
    value?: string
    placeholder?: string
}
export interface BaseFormGroup {
    component?: Component
    label?: string
    required?: boolean
    name: string
    attrs?: BaseFormGroupAttrs
    groupSize?: 'half'
}

export interface BaseFormBlock {
    label?: string
    required?: boolean
    name: string
}

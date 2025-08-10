export enum UserSettingMainPageType {
    STORE = 'store',
    CATEGORY = 'category',
    CHARACTERISTIC = 'characteristic',
    PRODUCT = 'product',
    OPERATION = 'operation'
}

export interface UserSettingAction {
    create: boolean
    update: boolean
    move: boolean
    delete: boolean
}

export interface UserSettingBaseFormBody {
    name: string
    surname: string
    login: string
    password: string
    action: UserSettingAction,
    main_page: UserSettingMainPageType,
    second_shift: boolean
}
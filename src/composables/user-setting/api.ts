import { UserSettingApi } from '@/model/user-setting/api'
import { UserSettingBaseFormBody } from '@/model/user-setting/types'
import { useFetchData } from '@/composables/base/fetch'
import { RequestMethod } from '@/model/base/types'
import { useMutation } from '@tanstack/vue-query'

export const useUserSettingApi = () => {
    const createUserSetting = (successAction: () => void) => {
        return useMutation({
            mutationFn: (body: UserSettingBaseFormBody) =>
                useFetchData<UserSettingBaseFormBody>(
                    UserSettingApi.createUserSetting,
                    RequestMethod.POST,
                    body
                ),
            onSuccess: () => successAction(),
            onError: (error) => {
                throw error
            }
        })
    }
    return {
        createUserSetting
    }
}

import { RequestMethod } from '@/model/base/types'

export const useFetchData = async <T>(
    url: string,
    method: RequestMethod,
    payload: T
) => {
    return await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        },
        method,
        body: JSON.stringify(payload)
    })
}

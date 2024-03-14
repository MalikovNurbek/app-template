import type { RuntimeConfig } from "nuxt/schema";
import type { FetchContext, FetchResponse } from "ofetch";

export const getApiInstances = (config: RuntimeConfig) => {
    const serverApiInstance = $fetch.create({
        baseURL: config.public.API_BASE_URL,
        onRequest(context: FetchContext): Promise<void> | void {
            console.log('context', context)
        },
        onResponseError(context: FetchContext & { response: FetchResponse<ResponseType> }): Promise<void> | void {
            console.log('error context', context)
        }
    })

    return { serverApiInstance }
}
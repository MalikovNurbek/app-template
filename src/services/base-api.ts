import type { $Fetch, NitroFetchRequest } from "nitropack";

export interface BaseApiImpl {

    get<TResponseData>(
        path: string,
        config?: any
    ): Promise<TResponseData>;
}

export class BaseApi {
    constructor(private http: $Fetch<unknown, NitroFetchRequest>) {
        this.http = http;
    }

    async get<TResponseData>(
        path: string,
        config?: any
    ): Promise<TResponseData> {
        return await this.http<TResponseData>(path, {
            ...config,
            method: 'GET',
        });
    }
}
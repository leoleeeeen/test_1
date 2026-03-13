import axios, { type AxiosRequestConfig } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export type ApiSuccess<T> = {
    ok: true
    data: T
}

export type ApiError = {
    ok: false
    error: string
}

export type ApiResult<T> = ApiSuccess<T> | ApiError

export const httpService = axios.create({
    baseURL: API_URL
})

export const httpClient = async <T>(
    config: AxiosRequestConfig
): Promise<ApiResult<T>> => {
    try {
        const response = await httpService.request<T>(config);

        return {
            ok: true,
            data: response.data
        };

    } catch (error: unknown) {

        if (axios.isAxiosError<{ err?: string }>(error)) {
            return {
                ok: false,
                error: error.response?.data?.err ?? "Server error"
            };
        }

        return {
            ok: false,
            error: "Network error"
        };
    }
};
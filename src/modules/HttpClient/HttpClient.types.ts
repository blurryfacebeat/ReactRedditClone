import { AxiosInstance } from 'axios';

export interface IHttpClient {
    _instance: AxiosInstance;
}

export interface IHttpOptions {
    baseURL?: string;
    headers?: Record<string, string>;
    params?: Record<string, unknown>;
}

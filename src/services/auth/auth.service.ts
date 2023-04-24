import { BaseHttpClient } from '@/modules/HttpClient/BaseHttpClient';

export const fetchAuth = async (): Promise<any> => BaseHttpClient.get('/authorize');

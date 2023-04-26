import { BaseHttpClient } from '@/modules/HttpClient';

export const fetchProfileInfo = async (): Promise<any> => BaseHttpClient.get('/me');

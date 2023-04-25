import { BaseHttpClient } from '@/modules/HttpClient/BaseHttpClient';

export const fetchProfileInfo = async (): Promise<any> => BaseHttpClient.get('/me');

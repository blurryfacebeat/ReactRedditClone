import { BaseHttpClient } from '@/modules/HttpClient';
import { IGetProfileResponse } from '@/services/auth/getProfile.types';

export const getProfile = async (): Promise<IGetProfileResponse> => BaseHttpClient.get('/me');

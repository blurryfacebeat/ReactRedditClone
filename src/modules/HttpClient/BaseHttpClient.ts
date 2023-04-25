import { HttpClient } from './HttpClient';
import { IBaseHttpClientProps } from '@/modules/HttpClient/BaseHttpClient.types';

export const BaseHttpClient = new HttpClient({
  baseURL: 'https://oauth.reddit.com/api/v1',
});

export const setBaseHttpClientAuthorizationToken = (props: IBaseHttpClientProps) => {
  const { token, tokenType } = props;

  BaseHttpClient._instance.defaults.headers.common = {
    ...BaseHttpClient._instance.defaults.headers.common,
    Authorization: `${tokenType} ${token}`,
  };
};

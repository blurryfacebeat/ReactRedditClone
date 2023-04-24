import { HttpClient } from './HttpClient';

export const BaseHttpClient = new HttpClient({
  baseURL: 'https://www.reddit.com/api/v1/',
});

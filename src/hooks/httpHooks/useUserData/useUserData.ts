import { useEffect, useState } from 'react';

import { fetchProfileInfo } from '@/services';
import { IUserUserDataData } from '@/hooks/httpHooks/useUserData/userUserData.types';
import { setBaseHttpClientAuthorizationToken } from '@/modules/HttpClient/BaseHttpClient/BaseHttpClient';

export const useUserData = (token: string) => {
  const [data, setData] = useState<IUserUserDataData>({ iconImg: '', name: '' });

  useEffect(() => {
    setBaseHttpClientAuthorizationToken({ fullToken: token });

    fetchProfileInfo()
      .then((res) => {
        const { icon_img, name } = res;

        setData({ iconImg: icon_img?.split('?')?.[0], name });
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }, []);

  return [data];
};

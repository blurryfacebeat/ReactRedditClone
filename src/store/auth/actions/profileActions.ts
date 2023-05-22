import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfile as apiGetProfile } from '@/services';

export const getProfile = createAsyncThunk('profile/fetch', async () => {
  const response = await apiGetProfile();

  const { icon_img, name } = response;

  return { iconImg: icon_img?.split('?')?.[0], name };
});

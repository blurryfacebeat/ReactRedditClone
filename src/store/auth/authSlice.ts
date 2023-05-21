import { createSlice } from '@reduxjs/toolkit';

import { IAuthSliceInitialState } from '@/store/auth/authSlice.types';

const initialState: IAuthSliceInitialState = {
  isLoading: false,
  userInfo: {},
  userToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;

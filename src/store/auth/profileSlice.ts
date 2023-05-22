import { createSlice } from '@reduxjs/toolkit';

import { getProfile } from '@/store/auth/actions/profileActions';
import { IProfileSliceInitialState } from '@/store/auth/profileSlice.types';

const initialState: IProfileSliceInitialState = {
  isLoading: false,
  profileInfo: {
    iconImg: '',
    name: '',
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;

        state.profileInfo = action.payload;
      })
      .addCase(getProfile.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default profileSlice.reducer;

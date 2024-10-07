import { createSlice } from '@reduxjs/toolkit';

export interface BooleanState {
  loading: boolean;
}

const initialState: BooleanState = {
  loading: false,
};

export const commonSlice = createSlice({
  name: 'commmon',
  initialState,
  reducers: {
    SetLoading: (state) => {
      state.loading = !state.loading;
    }
  },
});

export const { SetLoading } = commonSlice.actions;

export default commonSlice.reducer;

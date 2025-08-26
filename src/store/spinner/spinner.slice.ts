import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export interface SpinnerState {
  loadingCount: number;
}

const initialState: SpinnerState = {
  loadingCount: 0,
};

export const spinnerSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingCount += 1;
    },
    finishLoading: (state) => {
      state.loadingCount = Math.max(state.loadingCount - 1, 0);
    },
  },
});

export const { actions: spinnerActions, reducer: spinnerReducer } =
  spinnerSlice;

export const selectSpinnerState = (state: RootState) => state.spinnerReducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { UserModel } from '@/resources/models/user.model';

export interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}


export interface AuthState {
  tokens: Tokens | undefined;
  account?: UserModel;
}

const initialState: AuthState = {
  account: undefined,
  tokens: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccount: (
      state,
      action: PayloadAction<UserModel | undefined>,
    ) => {
      state.account = action.payload;
    },
    setToken: (state, action: PayloadAction<Tokens | undefined>) => {
      state.tokens = action.payload;
    }
  },
});

export const { actions: authActions, reducer: authReducer } =
  authSlice;

export const selectAuthState = (state: RootState) =>
  state.authReducer;

import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@/store/auth/auth.slice';
import { spinnerReducer } from '@/store/spinner/spinner.slice';

export const store = configureStore({
  reducer: {
    authReducer,
    spinnerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the index itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
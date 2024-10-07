// app/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/Loading'; // Example slice

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add more reducers here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

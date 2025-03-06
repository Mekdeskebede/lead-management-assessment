import { configureStore } from '@reduxjs/toolkit';
import { leadApi } from '../services/leadApi';

export const store = configureStore({
  reducer: {
    [leadApi.reducerPath]: leadApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(leadApi.middleware),
}); 
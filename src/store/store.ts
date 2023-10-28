import {configureStore} from '@reduxjs/toolkit';
import {simpleShopApi} from './api';
import {cartSlice} from './cart';

export const store = configureStore({
  reducer: {
    [simpleShopApi.reducerPath]: simpleShopApi.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(simpleShopApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

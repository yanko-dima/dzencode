import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './products/productSlice';
import { orderReducer } from './orders/orderSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

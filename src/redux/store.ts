import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './products/productSlice';
import { orderReducer } from './orders/orderSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productReducer,
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

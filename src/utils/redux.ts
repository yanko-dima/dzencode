import { PayloadAction } from '@reduxjs/toolkit';
import { IProductState } from '../models/IProducts';
import { IOrdersState } from '../models/IOrders';

// Pending
export const handleProductsPending = (state: IProductState) => {
  state.isLoading = true;
};

export const handleOrdersPending = (state: IOrdersState) => {
  state.isLoading = true;
};

export const handleProductsFulfilled = (
  state: IProductState,
  action: PayloadAction<
    any,
    string,
    { arg: void; requestId: string; requestStatus: 'fulfilled' },
    never
  >
) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

// Fulfilled
export const handleOrdersFulfilled = (
  state: IOrdersState,
  action: PayloadAction<
    any,
    string,
    { arg: void; requestId: string; requestStatus: 'fulfilled' },
    never
  >
) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

// Reject
export const handleProductsReject = (
  state: IProductState,
  action: PayloadAction<unknown, string, {}>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleOrdersReject = (
  state: IOrdersState,
  action: PayloadAction<unknown, string, {}>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

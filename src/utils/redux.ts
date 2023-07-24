import { PayloadAction } from '@reduxjs/toolkit';
import { IProductState } from '../models/IProducts';

export const handleProductsPending = (state: IProductState) => {
  state.isLoading = true;
};

export const handleProductFulfilled = (
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

export const handleProductsReject = (
  state: IProductState,
  action: PayloadAction<unknown, string, {}>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

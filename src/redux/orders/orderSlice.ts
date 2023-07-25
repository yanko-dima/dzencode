import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from './operations';
import {
  handleOrdersFulfilled,
  handleOrdersPending,
  handleOrdersReject,
} from '../../utils/redux';
import { IOrdersState } from '../../models/IOrders';

const initialState: IOrdersState = {
  items: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOrders.pending, handleOrdersPending)
      .addCase(getOrders.fulfilled, handleOrdersFulfilled)
      .addCase(getOrders.rejected, handleOrdersReject);
  },
});

export const orderReducer = orderSlice.reducer;

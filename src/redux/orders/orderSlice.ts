import { createSlice } from '@reduxjs/toolkit';
import { deleteOrder, getOrders } from './operations';
import {
  handleDeleteOrderFulfilled,
  handleGetOrdersFulfilled,
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
      .addCase(getOrders.fulfilled, handleGetOrdersFulfilled)
      .addCase(getOrders.rejected, handleOrdersReject)
      .addCase(deleteOrder.pending, handleOrdersPending)
      .addCase(deleteOrder.fulfilled, handleDeleteOrderFulfilled)
      .addCase(deleteOrder.rejected, handleOrdersReject);
  },
});

export const orderReducer = orderSlice.reducer;

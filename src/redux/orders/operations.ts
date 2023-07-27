import { ORDERS } from '../../constants/redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from '../../api/AxiosInstance';

const {
  FETCH_ORDERS,
  // FETCH_ORDER_BY_ID,
  // CREATE_ORDER,
  // UPDATE_ORDER,
  DELETE_ORDER,
} = ORDERS;

export const getOrders = createAsyncThunk(FETCH_ORDERS, async (_, thunkAPI) => {
  try {
    const res = await AxiosInstance.get('/orders');

    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue((err as Error).message);
  }
});

export const deleteOrder = createAsyncThunk(
  DELETE_ORDER,
  async (id: string, thunkAPI) => {
    try {
      const res = await AxiosInstance.delete(`/orders/${id}`);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  }
);

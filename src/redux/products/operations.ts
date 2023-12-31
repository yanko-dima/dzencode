import { createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../constants/redux';
import { AxiosInstance } from '../../api/AxiosInstance';

const {
  FETCH_PRODUCTS,
  // FETCH_PRODUCT_BY_ID,
  // CREATE_PRODUCT,
  // UPDATE_PRODUCT,
  DELETE_PRODUCT,
} = PRODUCTS;

export const getProducts = createAsyncThunk(
  FETCH_PRODUCTS,
  async (_, thunkAPI) => {
    try {
      const res = await AxiosInstance.get('/products');

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  DELETE_PRODUCT,
  async (id: string, thunkAPI) => {
    try {
      const res = await AxiosInstance.delete(`/products/${id}`);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue((err as Error).message);
    }
  }
);

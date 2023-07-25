import { getProducts } from './operations';
import { createSlice } from '@reduxjs/toolkit';
import {
  handleProductsFulfilled,
  handleProductsPending,
  handleProductsReject,
} from '../../utils/redux';
import { IProductState } from '../../models/IProducts';

const initialState: IProductState = {
  items: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, handleProductsPending)
      .addCase(getProducts.fulfilled, handleProductsFulfilled)
      .addCase(getProducts.rejected, handleProductsReject);
  },
});

export const productReducer = productSlice.reducer;

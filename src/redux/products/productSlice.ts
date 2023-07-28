import { deleteProduct, getProducts } from './operations';
import { createSlice } from '@reduxjs/toolkit';
import {
  handleDeleteProductFulfilled,
  handleProductsFulfilled,
  handleProductsPending,
  handleProductsReject,
} from '../../halpers/redux';
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
      .addCase(getProducts.rejected, handleProductsReject)
      .addCase(deleteProduct.pending, handleProductsPending)
      .addCase(deleteProduct.fulfilled, handleDeleteProductFulfilled)
      .addCase(deleteProduct.rejected, handleProductsReject);
  },
});

export const productReducer = productSlice.reducer;

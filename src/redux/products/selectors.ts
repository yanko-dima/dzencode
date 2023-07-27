import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { selectStatusFilter } from '../filter/selectors';
import { statusFilter } from '../../constants/filter';

export const selectAllProducts = (state: RootState) => state.products.items;
export const selectIsProductsLoading = (state: RootState) =>
  state.products.isLoading;
export const selectProductsError = (state: RootState) => state.products.error;

export const selectVisibleProducts = createSelector(
  [selectAllProducts, selectStatusFilter],
  (products, filter) => {
    switch (filter) {
      case statusFilter.brash:
        return products.filter(
          product => product.type.toLowerCase() === statusFilter.brash
        );
      case statusFilter.scrunchy:
        return products.filter(
          product => product.type.toLowerCase() === statusFilter.scrunchy
        );
      default:
        return products;
    }
  }
);

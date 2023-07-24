import { RootState } from '../store';

export const selectAllProducts = (state: RootState) => state.products.items;
export const selectIsProductsLoading = (state: RootState) =>
  state.products.isLoading;
export const selectProductsError = (state: RootState) => state.products.error;

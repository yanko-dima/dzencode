import { RootState } from '../store';

export const selectAllOrders = (state: RootState) => state.orders.items;
export const selectIsOrdersLoading = (state: RootState) =>
  state.orders.isLoading;
export const selectOrdersError = (state: RootState) => state.orders.error;

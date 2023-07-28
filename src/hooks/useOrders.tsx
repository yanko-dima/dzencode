import { useEffect } from 'react';
import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';
import {
  selectAllOrders,
  selectIsOrdersLoading,
  selectOrdersError,
} from '../redux/orders/selectors';
import { getOrders } from '../redux/orders/operations';

export const useOrders = () => {
  const dispatch = useAppDispatch();

  const orders = useSelector(selectAllOrders);
  const isLoading = useSelector(selectIsOrdersLoading);
  const error = useSelector(selectOrdersError);

  useEffect(() => {
    if (!orders.length) {
      dispatch(getOrders());
    }
  }, [orders]);

  return {
    orders,
    isLoading,
    error,
  };
};

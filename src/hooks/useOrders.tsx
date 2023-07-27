import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';
import {
  selectAllOrders,
  selectIsOrdersLoading,
  selectOrdersError,
} from '../redux/orders/selectors';
import { useEffect, useMemo } from 'react';
import { getOrders } from '../redux/orders/operations';

export const useOrders = () => {
  const dispatch = useAppDispatch();

  const orders = useSelector(selectAllOrders);
  const isLoading = useSelector(selectIsOrdersLoading);
  const error = useSelector(selectOrdersError);

  const memoOrders = useMemo(() => orders, [orders]);

  const getOrderName = (orderId: string) => {
    const findOrder = memoOrders.find(order => order.id === orderId);

    return findOrder ? findOrder.title : `Order: ${orderId}`;
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return {
    orders: memoOrders,
    isLoading,
    error,
    getOrderName,
  };
};

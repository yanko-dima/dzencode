import { useEffect, useMemo } from 'react';
import { useAppDispatch } from './redux';
import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectIsProductsLoading,
  selectProductsError,
  selectVisibleProducts,
} from '../redux/products/selectors';
import { getProducts } from '../redux/products/operations';
export const useProducts = () => {
  const dispatch = useAppDispatch();

  const products = useSelector(selectAllProducts);
  const visibleProducts = useSelector(selectVisibleProducts);
  const isLoading = useSelector(selectIsProductsLoading);
  const error = useSelector(selectProductsError);

  const memoProducts = useMemo(() => products, [products]);
  const memoVisibleProducts = useMemo(() => visibleProducts, [visibleProducts]);

  const getOrderProducts = (orderId: string) => {
    return memoProducts.filter(product => product.order === orderId);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return {
    products: memoProducts,
    visibleProducts: memoVisibleProducts,
    isLoading,
    error,
    getOrderProducts,
  };
};

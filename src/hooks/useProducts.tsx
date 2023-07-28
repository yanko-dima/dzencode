import { useEffect } from 'react';
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

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, [products]);

  return {
    products,
    visibleProducts,
    isLoading,
    error,
  };
};

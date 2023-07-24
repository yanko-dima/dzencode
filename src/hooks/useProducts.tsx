import {
  selectAllProducts,
  selectIsProductsLoading,
  selectProductsError,
} from '../redux/products/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/products/operations';
import { useAppDispatch } from './redux';
export const useProducts = () => {
  const dispatch = useAppDispatch();

  const products = useSelector(selectAllProducts);
  const isLoading = useSelector(selectIsProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return {
    products,
    isLoading,
    error,
  };
};

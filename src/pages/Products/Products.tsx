import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../../components/Loader/Loader';
import { ProductsBar } from './components/ProductsBar';
import { ProductsList } from './components/ProductsList';

export default function Products() {
  const { visibleProducts, isLoading, error } = useProducts();

  return (
    <>
      <ProductsBar />
      {isLoading && !error && <Loader />}
      {!isLoading && !error && (
        <ProductsList visibleProducts={visibleProducts} />
      )}
      {!isLoading && error && <h2>Issue With Products Loading</h2>}
    </>
  );
}

import { ProductsFilter } from './ProductsFilter';

export const ProductsBar = () => {
  return (
    <div className="products-bar">
      <h1 className="products-title" style={{ marginBottom: 0 }}>
        Products
      </h1>
      <ProductsFilter />
    </div>
  );
};

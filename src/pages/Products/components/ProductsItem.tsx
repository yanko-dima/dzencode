import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useAppDispatch } from '../../../hooks/redux';
import { deleteProduct } from '../../../redux/products/operations';
import { ProductsItemGuarantee } from './ProductsItemGuarantee';
import { ProductsItemPrice } from './ProductsItemPrice';
import { ProductsItemOrder } from './ProductsItemOrder';
import { ProductsItemTrash } from './ProductsItemTrash';
import { IProductsItem } from '../../../models/IProducts';

export const ProductsItem: React.FC<IProductsItem> = ({ visibleProducts }) => {
  const dispatch = useAppDispatch();

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      {visibleProducts.map(product => {
        const { id, title, type, guarantee, price, order } = product;

        return (
          <ListGroup.Item key={id} className={'products-item'}>
            <div className={'products-item__title p-2'}>{title}</div>
            <div className={'products-item__type p-2'}>{type}</div>
            <ProductsItemGuarantee guarantee={guarantee} />
            <ProductsItemPrice price={price} />
            <ProductsItemOrder order={order} />
            <ProductsItemTrash
              handleDeleteProduct={handleDeleteProduct}
              id={id}
            />
          </ListGroup.Item>
        );
      })}
    </>
  );
};

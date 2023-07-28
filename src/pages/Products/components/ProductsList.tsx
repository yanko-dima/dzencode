import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ProductsItem } from './ProductsItem';
import { IProductsList } from '../../../models/IProducts';
import { useOrders } from '../../../hooks/useOrders';

export const ProductsList: React.FC<IProductsList> = ({ visibleProducts }) => {
  const { orders } = useOrders();

  return (
    <div className={'products-list__wrapper'}>
      <ListGroup className={'products-list my-2'}>
        <ProductsItem visibleProducts={visibleProducts} orders={orders} />
      </ListGroup>
    </div>
  );
};

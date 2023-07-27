import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { IOrderProductsList } from '../../../models/IOrders';
import { OrdersProductsItem } from './OrdersProductsItem';

export const OrdersProductsList: React.FC<IOrderProductsList> = ({
  filteredProducts,
}) => {
  return (
    <ListGroup>
      <OrdersProductsItem filteredProducts={filteredProducts} />
    </ListGroup>
  );
};

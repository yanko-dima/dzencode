import React from 'react';
import { getOrderName } from '../../../halpers/orders';
import { IProductsItemOrder } from '../../../models/IProducts';

export const ProductsItemOrder: React.FC<IProductsItemOrder> = ({
  orderId,
  orders,
}) => {
  const orderName = getOrderName(orders, orderId);

  return <div className={'products-item__order p-2'}>{orderName}</div>;
};

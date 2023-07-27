import React from 'react';
import { useOrders } from '../../../hooks/useOrders';
import { IProductsItemOrder } from '../../../models/IProducts';

export const ProductsItemOrder: React.FC<IProductsItemOrder> = ({ order }) => {
  const { getOrderName } = useOrders();

  const orderName = getOrderName(order);

  return <div className={'products-item__order p-2'}>{orderName}</div>;
};

import React from 'react';
import { IOrdersItemQuantity } from '../../../models/IOrders';

export const OrdersItemQuantity: React.FC<IOrdersItemQuantity> = ({
  quantity,
}) => {
  return (
    <div className={'orders-item__quantity-wrap p-2'}>
      <span className={'orders-item__quantity-number'}>{quantity}</span>
      <span className={'orders-item__quantity-name'}>Products</span>
    </div>
  );
};

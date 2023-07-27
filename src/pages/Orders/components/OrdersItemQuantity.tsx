import React from 'react';
import { IOrdersItemQuantity } from '../../../models/IOrders';

export const OrdersItemQuantity: React.FC<IOrdersItemQuantity> = ({
  quantity,
  isOrderOpen,
}) => {
  return (
    <div
      className={
        !isOrderOpen
          ? 'orders-item__quantity-wrap-large p-2'
          : 'orders-item__quantity-wrap-small p-2'
      }
    >
      <span className={'orders-item__quantity-number'}>{quantity}</span>
      <span className={'orders-item__quantity-name'}>Products</span>
    </div>
  );
};

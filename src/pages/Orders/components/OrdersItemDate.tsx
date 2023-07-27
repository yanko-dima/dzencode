import React from 'react';
import { useDate } from '../../../hooks/useDate';
import { IOrdersItemDate } from '../../../models/IOrders';

export const OrdersItemDate: React.FC<IOrdersItemDate> = ({
  createdAt,
  isOrderOpen,
}) => {
  const { getFirstFormatDate, getSecondFormatDate } = useDate();

  const date = new Date(createdAt);
  const firstDade = getFirstFormatDate(date);
  const secondDate = getSecondFormatDate(date);

  return (
    <div
      className={
        !isOrderOpen
          ? 'orders-item__date-large p-2'
          : 'orders-item__date-small p-2'
      }
    >
      <span className={'orders-item__date-first'}>{firstDade}</span>
      <span className={'orders-item__date-second'}>{secondDate}</span>
    </div>
  );
};

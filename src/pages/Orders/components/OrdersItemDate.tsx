import React from 'react';
import { useDate } from '../../../hooks/useDate';

export interface IOrdersItemDate {
  createdAt: string;
}

export const OrdersItemDate: React.FC<IOrdersItemDate> = ({ createdAt }) => {
  const { getFirstFormatDate, getSecondFormatDate } = useDate();

  const date = new Date(createdAt);
  const firstDade = getFirstFormatDate(date);
  const secondDate = getSecondFormatDate(date);

  return (
    <div className={'orders-item__date p-2'}>
      <span className={'orders-item__date-first'}>{firstDade}</span>
      <span className={'orders-item__date-second'}>{secondDate}</span>
    </div>
  );
};

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
    <div className={'p-2'} style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{firstDade}</span>
      <span>{secondDate}</span>
    </div>
  );
};

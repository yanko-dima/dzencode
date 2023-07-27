import React from 'react';
import { useDate } from '../../../hooks/useDate';
import { IProductsItemGuarantee } from '../../../models/IProducts';

export const ProductsItemGuarantee: React.FC<IProductsItemGuarantee> = ({
  guarantee,
}) => {
  const { getSecondFormatDate } = useDate();
  const { start, end } = guarantee;

  const startDate = getSecondFormatDate(new Date(start));
  const endDate = getSecondFormatDate(new Date(end));

  return (
    <div className={'products-item__guarantee p-2'}>
      <div>
        <span className={'products-item__guarantee-text'}>start:</span>
        <span className={'products-item__guarantee-date'}>{startDate}</span>
      </div>
      <div>
        <span className={'products-item__guarantee-text'}>end:</span>
        <span className={'products-item__guarantee-date'}>{endDate}</span>
      </div>
    </div>
  );
};

import React from 'react';
import { IProductsItemPrice } from '../../../models/IProducts';

export const ProductsItemPrice: React.FC<IProductsItemPrice> = ({ price }) => {
  return (
    <div className={'products-item__price p-2'}>
      {price.map(item => {
        return (
          <div
            key={item.symbol}
            className={
              item.symbol === 'USD'
                ? 'products-item__price-usd'
                : 'products-item__price-uah'
            }
          >{`${item.value} ${item.symbol}`}</div>
        );
      })}
    </div>
  );
};

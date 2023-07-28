import React from 'react';
import { getOrderProducts } from '../../../halpers/products';
import { IOrdersItemSum } from '../../../models/IOrders';

export const OrdersItemSum: React.FC<IOrdersItemSum> = ({
  products,
  orderId,
}) => {
  const filteredProducts = getOrderProducts(products, orderId);

  const getSum = (currency: string) => {
    return filteredProducts
      .map(
        product =>
          product.price
            .filter(price => price.symbol === currency)
            .map(price => price.value)[0]
      )
      .reduce((acc, value) => acc + value, 0);
  };

  const usdSum = getSum('USD');
  const uahSum = getSum('UAH');

  return (
    <div className={'orders-item__sum p-2'}>
      <span className={'orders-item__sum-usd'}>{`${usdSum} USD`}</span>
      <span className={'orders-item__sum-uah'}>{`${uahSum} UAH`}</span>
    </div>
  );
};

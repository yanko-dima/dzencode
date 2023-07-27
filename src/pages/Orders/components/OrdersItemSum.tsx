import React from 'react';
import { useProducts } from '../../../hooks/useProducts';
import { IOrdersItemSum } from '../../../models/IOrders';

export const OrdersItemSum: React.FC<IOrdersItemSum> = ({ orderId }) => {
  const { getOrderProducts } = useProducts();
  const filteredProducts = getOrderProducts(orderId);

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

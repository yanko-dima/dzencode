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

  const uahSum = getSum('UAH');
  const usdSum = getSum('USD');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{`${usdSum} USD`}</span>
      <span>{`${uahSum} UAH`}</span>
    </div>
  );
};

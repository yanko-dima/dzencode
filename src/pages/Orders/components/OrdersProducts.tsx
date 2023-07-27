import React from 'react';
import { Card, Collapse, CloseButton } from 'react-bootstrap';
import { useProducts } from '../../../hooks/useProducts';
import { Loader } from '../../../components/Loader/Loader';
import { OrdersProductsList } from './OrdersProductsList';
// import { useOrders } from '../../../hooks/useOrders';
import { IOrdersProducts } from '../../../models/IOrders';

export const OrdersProducts: React.FC<IOrdersProducts> = ({
  isOrderOpen,
  handleCloseProducts,
  orderId,
}) => {
  const { getOrderProducts, isLoading, error } = useProducts();
  // const { getOrderName } = useOrders();

  const filteredProducts = getOrderProducts(orderId);
  // const orderName = getOrderName(orderId);
  //
  // console.log('orderId: ', orderId);
  // console.log('orderName: ', orderName);

  return (
    <div
      className={
        !isOrderOpen ? 'orders-products__close' : 'orders-products__open'
      }
    >
      <Collapse in={isOrderOpen} dimension="width">
        <div className={'orders-products__wrap'}>
          <Card body className={'orders-products__card'}>
            <h2 className={'orders-products__title'}>{`Order: ${orderId}`}</h2>
            {isLoading && !error && <Loader />}
            {!isLoading && !error && filteredProducts.length ? (
              <OrdersProductsList filteredProducts={filteredProducts} />
            ) : (
              <h5 className={'products-title__placeholder'}>
                No products in order
              </h5>
            )}
          </Card>
          <CloseButton
            className={'orders-products-close'}
            onClick={handleCloseProducts}
          />
        </div>
      </Collapse>
    </div>
  );
};

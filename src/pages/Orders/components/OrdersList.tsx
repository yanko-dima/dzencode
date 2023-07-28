import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { OrdersProducts } from './OrdersProducts';
import { OrdersItem } from './OrdersItem';
import { useProducts } from '../../../hooks/useProducts';
import { IOrdersList } from '../../../models/IOrders';

export const OrdersList: React.FC<IOrdersList> = ({
  handleRowClick,
  isOrderOpen,
  orderId,
  handleCloseProducts,
  orders,
  setOrderId,
}) => {
  const { products } = useProducts();

  return (
    <div className={'orders__overlay-box'}>
      <ListGroup
        className={!isOrderOpen ? 'orders__list-large' : 'orders__list-small'}
      >
        <OrdersItem
          orders={orders}
          handleRowClick={handleRowClick}
          isOrderOpen={isOrderOpen}
          orderId={orderId}
          setOrderId={setOrderId}
          products={products}
        />
      </ListGroup>

      <OrdersProducts
        isOrderOpen={isOrderOpen}
        handleCloseProducts={handleCloseProducts}
        orderId={orderId}
        orders={orders}
      />
    </div>
  );
};

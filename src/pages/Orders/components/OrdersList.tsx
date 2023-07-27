import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { OrdersProducts } from './OrdersProducts';
import { OrdersItem } from './OrdersItem';
import { IOrdersList } from '../../../models/IOrders';

export const OrdersList: React.FC<IOrdersList> = ({
  handleRowClick,
  isOrderOpen,
  orderId,
  handleCloseProducts,
  orders,
  setOrderId,
}) => {
  return (
    <div className={'orders-list__wrapper'}>
      <ListGroup
        className={!isOrderOpen ? 'orders-list__large' : 'orders-list__small'}
      >
        <OrdersItem
          orders={orders}
          handleRowClick={handleRowClick}
          isOrderOpen={isOrderOpen}
          orderId={orderId}
          setOrderId={setOrderId}
        />
      </ListGroup>

      <OrdersProducts
        isOrderOpen={isOrderOpen}
        handleCloseProducts={handleCloseProducts}
        orderId={orderId}
      />
    </div>
  );
};

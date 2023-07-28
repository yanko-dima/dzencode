import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { OrdersItemDate } from './OrdersItemDate';
import { DeleteOrder } from '../../../components/Modals/DeleteOrder/DeleteOrder';
import { ButtonTrash } from '../../../components/Buttons/ButtonTrash';
import { OrdersItemSum } from './OrdersItemSum';
import { OrdersItemQuantity } from './OrdersItemQuantity';
import { IOrdersItem } from '../../../models/IOrders';

export const OrdersItem: React.FC<IOrdersItem> = ({
  orders,
  handleRowClick,
  isOrderOpen,
  orderId,
  setOrderId,
  products,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalShowToggle = () => {
    setShowModal(!showModal);
  };

  const handleDeleteIconClick = (id: string) => {
    setOrderId(id);
    handleModalShowToggle();
  };

  return (
    <>
      {orders.map(order => {
        const { id, title, createdAt } = order;
        const productsQuantity = products.filter(
          product => product.order === id
        ).length;

        return (
          <ListGroup.Item className={'orders-item'} key={id} action>
            <div
              className={'orders-item__wrapper'}
              onClick={() => handleRowClick(id)}
            >
              {!isOrderOpen && (
                <div className={'orders-item__title p-2'}>{title}</div>
              )}
              <OrdersItemQuantity
                quantity={productsQuantity}
                isOrderOpen={isOrderOpen}
              />
              <OrdersItemDate createdAt={createdAt} isOrderOpen={isOrderOpen} />
              {!isOrderOpen && (
                <OrdersItemSum products={products} orderId={id} />
              )}
            </div>

            {!isOrderOpen && (
              <ButtonTrash
                handleDeleteIconClick={handleDeleteIconClick}
                id={id}
                style={{ marginRight: 8 }}
              />
            )}
          </ListGroup.Item>
        );
      })}

      {showModal && (
        <DeleteOrder
          showModal={showModal}
          handleModalShowToggle={handleModalShowToggle}
          orderId={orderId}
        />
      )}
    </>
  );
};

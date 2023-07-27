import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useProducts } from '../../../hooks/useProducts';
import { OrdersItemDate } from './OrdersItemDate';
import { ModalDeleteOrder } from '../../../components/Modals/ModalDeleteOrder';
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
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { products } = useProducts();

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
              <OrdersItemQuantity quantity={productsQuantity} />
              <OrdersItemDate createdAt={createdAt} />
              {!isOrderOpen && <OrdersItemSum orderId={id} />}
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
        <ModalDeleteOrder
          showModal={showModal}
          handleModalShowToggle={handleModalShowToggle}
          orderId={orderId}
        />
      )}
    </>
  );
};

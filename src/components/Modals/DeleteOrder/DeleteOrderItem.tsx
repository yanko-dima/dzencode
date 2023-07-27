import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { IDeleteOrderItem } from '../../../models/IOrders';

export const DeleteOrderItem: React.FC<IDeleteOrderItem> = ({
  filteredProducts,
}) => {
  return (
    <>
      {filteredProducts.map(product => {
        const { id, photo, title, serialNumber } = product;

        return (
          <ListGroup.Item key={id} className={'orders-modal-item'}>
            <div>
              <img src={photo} alt={title} style={{ width: 50, height: 50 }} />
            </div>
            <div className={'orders-modal-item__description'}>
              <span className={'orders-modal-item__name'}>{title}</span>
              <span className={'orders-modal-item__serial'}>
                {serialNumber}
              </span>
            </div>
          </ListGroup.Item>
        );
      })}
    </>
  );
};

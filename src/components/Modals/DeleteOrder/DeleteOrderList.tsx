import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { DeleteOrderItem } from './DeleteOrderItem';
import { IDeleteOrderList } from '../../../models/IOrders';

export const DeleteOrderList: React.FC<IDeleteOrderList> = ({
  filteredProducts,
}) => {
  return (
    <ListGroup className={'orders-modal-list'}>
      <DeleteOrderItem filteredProducts={filteredProducts} />
    </ListGroup>
  );
};

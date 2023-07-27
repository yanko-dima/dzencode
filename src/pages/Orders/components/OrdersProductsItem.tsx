import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { IOrdersProductsItem } from '../../../models/IOrders';

export const OrdersProductsItem: React.FC<IOrdersProductsItem> = ({
  filteredProducts,
}) => {
  return (
    <>
      {filteredProducts.map(product => {
        const { id, photo, title, serialNumber } = product;

        return (
          <ListGroup.Item key={id} className={'orders-products__item'}>
            <div>
              {photo && (
                <img
                  src={photo}
                  alt={title}
                  style={{ width: 50, height: 50 }}
                />
              )}
            </div>
            <div className={'orders-products__description'}>
              <span className={'orders-products__name'}>{title}</span>
              <span className={'orders-products__serial'}>{serialNumber}</span>
            </div>
          </ListGroup.Item>
        );
      })}
    </>
  );
};

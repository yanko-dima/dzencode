import React from 'react';
import { ListGroup, Card, Collapse, CloseButton } from 'react-bootstrap';
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../Loader/Loader';
import { IOrdersProducts } from '../../models/IOrders';

export const OrdersProducts: React.FC<IOrdersProducts> = ({
  isOrderOpen,
  handleCloseProducts,
  orderId,
}) => {
  const { getOrderProducts, isLoading, error } = useProducts();
  const filteredProducts = getOrderProducts(orderId);

  return (
    <div style={{ minHeight: '150px' }}>
      <Collapse in={isOrderOpen} dimension="width">
        <div className={'orders-products-wrap'}>
          <Card
            body
            // style={{ width: '800px' }}
            // className={'col-xs-12 col-sm-6 col-md-8'}
          >
            <h2>{`Order: ${orderId}`}</h2>
            {isLoading && !error && <Loader />}
            {!isLoading && !error && (
              <ListGroup>
                {filteredProducts.map(product => {
                  const { id, photo, title, serialNumber } = product;

                  return (
                    <ListGroup.Item
                      key={id}
                      style={{ display: 'flex', gap: 12 }}
                    >
                      <div>
                        {photo && (
                          <img
                            src={photo}
                            alt={title}
                            style={{ width: 80, height: 80 }}
                          />
                        )}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <span>{title}</span>
                        <span>{serialNumber}</span>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
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

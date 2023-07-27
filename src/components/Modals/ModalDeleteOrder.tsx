import React from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../Loader/Loader';
import { useAppDispatch } from '../../hooks/redux';
import { deleteOrder } from '../../redux/orders/operations';
import { IModalDeleteOrder } from '../../models/IModals';

export const ModalDeleteOrder: React.FC<IModalDeleteOrder> = ({
  handleModalShowToggle,
  showModal,
  orderId,
}) => {
  const dispatch = useAppDispatch();

  const { getOrderProducts, isLoading, error } = useProducts();
  const filteredProducts = getOrderProducts(orderId);

  const handleDeleteOrder = (id: string) => {
    dispatch(deleteOrder(id));
    handleModalShowToggle();
  };

  return (
    <Modal
      show={showModal}
      onHide={handleModalShowToggle}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Do you want to delete this order?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading && !error && <Loader />}
        {!isLoading &&
          !error &&
          (filteredProducts.length ? (
            <ListGroup>
              {filteredProducts.map(product => {
                const { id, photo, title, serialNumber } = product;

                return (
                  <ListGroup.Item key={id} style={{ display: 'flex', gap: 12 }}>
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
          ) : (
            <h5>No products in order</h5>
          ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalShowToggle}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDeleteOrder(orderId)}>
          Delete order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

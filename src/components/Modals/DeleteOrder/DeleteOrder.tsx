import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useProducts } from '../../../hooks/useProducts';
import { Loader } from '../../Loader/Loader';
import { useAppDispatch } from '../../../hooks/redux';
import { deleteOrder } from '../../../redux/orders/operations';
import { DeleteOrderList } from './DeleteOrderList';
import { IModalDeleteOrder } from '../../../models/IModals';

export const DeleteOrder: React.FC<IModalDeleteOrder> = ({
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
            <DeleteOrderList filteredProducts={filteredProducts} />
          ) : (
            <h5 className={'products-title__placeholder'}>
              No products in order
            </h5>
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

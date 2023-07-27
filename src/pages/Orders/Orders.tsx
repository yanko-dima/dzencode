import React, { useState } from 'react';
import { useOrders } from '../../hooks/useOrders';
import { Loader } from '../../components/Loader/Loader';
import { OrdersList } from './components/OrdersList';
export default function Orders() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [orderId, setOrderId] = useState<string>('');

  const { orders, isLoading, error } = useOrders();

  const handleRowClick = (id: string): void => {
    if (id === orderId && isOrderOpen) {
      setIsOrderOpen(false);
    }

    if (id === orderId && !isOrderOpen) {
      setIsOrderOpen(true);
    }

    if (id !== orderId) {
      setIsOrderOpen(true);
    }

    setOrderId(id);
  };

  const handleCloseProducts = () => {
    setIsOrderOpen(false);
  };

  return (
    <>
      <h1 className="orders-title">Orders</h1>

      {isLoading && !error && <Loader />}
      {!isLoading && !error && (
        <OrdersList
          orderId={orderId}
          handleCloseProducts={handleCloseProducts}
          handleRowClick={handleRowClick}
          isOrderOpen={isOrderOpen}
          orders={orders}
          setOrderId={setOrderId}
        />
      )}
      {!isLoading && error && <h2>Issue With Orders Loading</h2>}
    </>
  );
}

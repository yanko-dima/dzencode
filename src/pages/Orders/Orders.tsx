import { useOrders } from '../../hooks/useOrders';
import { Loader } from '../../components/Loader/Loader';
import { ListGroup } from 'react-bootstrap';

export default function Orders() {
  const { orders, isLoading, error } = useOrders();

  return (
    <>
      <h1 className="orders-title">Orders</h1>

      {isLoading && !error && <Loader />}
      {!isLoading && !error && (
        <ListGroup as="ul">
          {orders.map(order => {
            const { id, title, description } = order;

            return (
              <ListGroup.Item as="li" key={id}>
                <div>{title}</div>
                <div>{description}</div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </>
  );
}

import { ListGroup } from 'react-bootstrap';
import { useProducts } from '../../hooks/useProducts';
import { Loader } from '../../components/Loader/Loader';

export default function Products() {
  const { products, isLoading, error } = useProducts();

  return (
    <>
      {isLoading && !error && <Loader />}
      {!isLoading && !error && (
        <ListGroup as="ul">
          {products.map(product => {
            const { id, title, type, guarantee, price, order } = product;

            return (
              <ListGroup.Item as="li" key={id}>
                <div>{title}</div>
                <div>{type}</div>
                <div>
                  <div>{guarantee.start}</div>
                  <div>{guarantee.end}</div>
                </div>
                <div>
                  {price.map(item => {
                    return <div>{`price: ${item.value} ${item.symbol}`}</div>;
                  })}
                </div>
                <div>{`Order: ${order}`}</div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </>
  );
}

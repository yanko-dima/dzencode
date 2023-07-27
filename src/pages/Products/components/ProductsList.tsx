import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ProductsItem } from './ProductsItem';
import { IProductsList } from '../../../models/IProducts';

export const ProductsList: React.FC<IProductsList> = ({ visibleProducts }) => {
  return (
    <div className={'products-list__wrapper'}>
      <ListGroup className={'products-list my-2'}>
        <ProductsItem visibleProducts={visibleProducts} />
      </ListGroup>
    </div>
  );
};

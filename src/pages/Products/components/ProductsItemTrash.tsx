import React from 'react';
import { ButtonTrash } from '../../../components/Buttons/ButtonTrash';
import { IProductsItemTrash } from '../../../models/IProducts';

export const ProductsItemTrash: React.FC<IProductsItemTrash> = ({
  handleDeleteProduct,
  id,
}) => {
  return (
    <div className={'products-item__trash p-2'}>
      <ButtonTrash handleDeleteIconClick={handleDeleteProduct} id={id} />
    </div>
  );
};

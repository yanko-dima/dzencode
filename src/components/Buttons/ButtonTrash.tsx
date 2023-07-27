import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IButtonTrash } from '../../models/IButtons';

export const ButtonTrash: React.FC<IButtonTrash> = ({
  handleDeleteIconClick,
  id,
}) => {
  return (
    <a
      onClick={() => {
        handleDeleteIconClick(id);
      }}
      className={'button-trash__link p-2'}
    >
      <MdDeleteForever className={'button-trash__icon'} />
    </a>
  );
};

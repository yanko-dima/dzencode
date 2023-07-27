import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IButtonTrash } from '../../models/IButtons';

export const ButtonTrash: React.FC<IButtonTrash> = ({
  handleDeleteIconClick,
  id,
  style,
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        handleDeleteIconClick(id);
      }}
      className={'button-trash__link p-2'}
      style={style}
    >
      <MdDeleteForever className={'button-trash__icon'} />
    </button>
  );
};

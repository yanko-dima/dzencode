import { CSSProperties } from 'react';

export interface IButtonTrash {
  handleDeleteIconClick: (id: string) => void;
  id: string;
  style?: CSSProperties | undefined;
}

import { IProduct } from '../models/IProducts';

export const getOrderProducts = (products: IProduct[], orderId: string) => {
  return products.filter(product => product.order === orderId);
};

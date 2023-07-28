import { IOrder } from '../models/IOrders';

export const getOrderName = (orders: IOrder[], orderId: string) => {
  const findOrder = orders.find(order => order.id === orderId);

  return findOrder ? findOrder.title : `Order: ${orderId}`;
};

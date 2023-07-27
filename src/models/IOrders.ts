export interface IOrder {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface IOrdersState {
  items: IOrder[];
  isLoading: boolean;
  error: unknown | null;
}

export interface IOrdersProducts {
  isOrderOpen: boolean;
  handleCloseProducts: () => void;
  orderId: string;
}

export interface IOrdersList {
  handleRowClick: (id: string) => void;
  handleCloseProducts: () => void;
  isOrderOpen: boolean;
  orderId: string;
  orders: IOrder[];
  setOrderId: (id: string) => void;
}

export interface IOrdersItem {
  handleRowClick: (id: string) => void;
  setOrderId: (id: string) => void;
  isOrderOpen: boolean;
  orders: IOrder[];
  orderId: string;
}

export interface IOrdersItemSum {
  orderId: string;
}

export interface IOrdersItemQuantity {
  quantity: number;
}

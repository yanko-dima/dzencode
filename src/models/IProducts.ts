import { IOrder } from './IOrders';

export interface IProductGuarantee {
  start: string;
  end: string;
}

export interface IProduct {
  id: string;
  serialNumber: string;
  isNew: boolean;
  photo?: string;
  title: string;
  type: string;
  specification: string;
  guarantee: IProductGuarantee;
  price: [
    { value: number; symbol: string; isDefault: boolean },
    { value: number; symbol: string; isDefault: boolean },
  ];
  order: string;
}

export interface IProductState {
  items: IProduct[];
  isLoading: boolean;
  error: unknown | null;
}

export interface IProductsList {
  visibleProducts: IProduct[];
}

export interface IProductsItem {
  visibleProducts: IProduct[];
  orders: IOrder[];
}

export interface IProductsItemGuarantee {
  guarantee: IProductGuarantee;
}

export interface IProductsItemPrice {
  price: [
    { value: number; symbol: string; isDefault: boolean },
    { value: number; symbol: string; isDefault: boolean },
  ];
}

export interface IProductsItemOrder {
  orders: IOrder[];
  orderId: string;
}

export interface IProductsItemTrash {
  handleDeleteProduct: (id: string) => void;
  id: string;
}

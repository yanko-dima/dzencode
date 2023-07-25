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

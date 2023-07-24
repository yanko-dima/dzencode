export interface IProduct {
  id: string;
  serialNumber: number | null;
  isNew: boolean;
  photo: string | null;
  title: string | null;
  type: string | null;
  specification: string | null;
  guarantee: {
    start: string | null;
    end: string | null;
  };
  price: [
    { value: number | null; symbol: string; isDefault: boolean },
    { value: number | null; symbol: string; isDefault: boolean },
  ];
  order: string | null;
}

export interface IProductState {
  items: IProduct[];
  isLoading: boolean;
  error: unknown | null;
}

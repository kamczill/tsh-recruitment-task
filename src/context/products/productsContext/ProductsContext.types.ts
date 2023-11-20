import { Meta, ProductItem } from 'api/actions/product/product.types';

export type Data = {
  items: ProductItem[] | [];
  meta: Meta | Record<string, never>;
};

export type ProductsContextValue = {
  data: Data;
  setData: (arg: Data) => void;
};

import { Meta, GetProductDetailQueryResponse } from 'api/actions/product/product.types';

export type Data = {
  items: GetProductDetailQueryResponse[];
  meta: Meta;
};

export type ProductsContextValue = {
  data: Data;
  setData: (arg: Data) => void;
};

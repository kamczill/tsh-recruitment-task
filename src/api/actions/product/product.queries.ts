import { AxiosInstance } from 'axios';
import { stringify } from 'qs';

import { GetProductDetailQueryResponse, GetProductsParams, GetProductsQueryResponse } from './product.types';

export const productQueries = {
  // QUERY_FUNCTIONS_SETUP
  getProductDetail: (client: AxiosInstance) => async (id: string) => {
    return (await client.get<GetProductDetailQueryResponse>(`/products/${id}`)).data;
  },
  getProducts: (client: AxiosInstance) => async (params: GetProductsParams) => {
    const queryParams = stringify({ ...params }, { addQueryPrefix: false });
    const questionMark = queryParams ? '?' : '';
    window.history.pushState({}, '', `${questionMark}${queryParams}`);
    return (await client.get<GetProductsQueryResponse>(`/products?${queryParams}&limit=8`)).data;
  },
};

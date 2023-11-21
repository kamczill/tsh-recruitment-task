import { useContext, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useQuery } from 'hooks/useQuery/useQuery';
import { ProductsContext } from 'context/products/productsContext/ProductsContext';

export const useProducts = () => {
  const context = useContext(ProductsContext);
  const [searchParams] = useSearchParams();

  if (!context) {
    throw new Error('ProductsContext must be within ProductsProvider');
  }

  const queryParams = useMemo(() => {
    const getSearchParamValue = (param: string) => {
      const value = searchParams.get(param);
      return value === null || value === '' ? undefined : value;
    };

    return {
      search: getSearchParamValue('search') ? getSearchParamValue('search') : undefined,
      page: getSearchParamValue('page') ? Number(getSearchParamValue('page')) : undefined,
      promo: getSearchParamValue('promo') === 'true' ? true : undefined,
      active: getSearchParamValue('active') === 'true' ? true : undefined,
    };
  }, [searchParams]);

  const { refetch, data, isLoading, isSuccess, isError, isFetching } = useQuery('getProducts', queryParams);
  const isEmpty = data?.meta.itemCount === 0;
  useEffect(() => {
    refetch();
    if (isSuccess) {
      context.setData(data);
    }
  }, [queryParams, isSuccess, data, context, refetch]);

  return { isLoading, isSuccess, isError, isFetching, isEmpty };
};

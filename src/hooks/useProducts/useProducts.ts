import { useContext, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useQuery } from 'hooks/useQuery/useQuery';
import { ProductsContext } from 'context/products/productsContext/ProductsContext';

export const useProducts = () => {
  const context = useContext(ProductsContext);
  const [searchParams] = useSearchParams();

  if (context === undefined) {
    throw new Error('ProductsContext must be within ProductsProvider');
  }

  const getSearchParamValue = (param: string) => {
    const value = searchParams.get(param);
    return value === null || value === '' ? undefined : value;
  };

  const queryParams = useMemo(
    () => ({
      search: getSearchParamValue('search'),
      page: getSearchParamValue('page') ? Number(getSearchParamValue('page')) : undefined,
      promo: getSearchParamValue('promo') === 'true',
      active: getSearchParamValue('active') === 'true',
    }),
    [searchParams],
  );

  const { refetch, data, isLoading, isSuccess, isError, isFetching } = useQuery('getProducts', queryParams);

  useEffect(() => {
    refetch();
    if (isSuccess) {
      context.setData(data);
    }
  }, [queryParams, isSuccess, data, context, refetch]);

  return { isLoading, isSuccess, isError, isFetching };
};

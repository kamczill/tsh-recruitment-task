import { useQuery } from 'hooks/useQuery/useQuery';
export const useProduct = (id: string) => {
  const { data, isLoading, isSuccess, isError, isFetching } = useQuery('getProductDetail', id);
  return { data, isLoading, isSuccess, isError, isFetching };
};

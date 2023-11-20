import { authMutations } from './auth/auth.mutations';
import { authQueries } from './auth/auth.queries';
import { productMutations } from './product/product.mutations';
import { productQueries } from './product/product.queries';
// API_COLLECTION_IMPORTS

export const queries = {
  ...authQueries,
  ...productQueries,
  // API_COLLECTION_QUERIES
} as const;

export type AxiosQueriesType = typeof queries;

export type AxiosInfiniteQueriesType = Pick<AxiosQueriesType, 'getUsersInfinite'>;

export const mutations = {
  ...authMutations,
  ...productMutations,
  // API_COLLECTION_MUTATIONS
} as const;

export type AxiosMutationsType = typeof mutations;

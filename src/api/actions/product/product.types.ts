// API_ACTION_TYPES

type rating = 1 | 2 | 3 | 4 | 5;
type URL = `http://${string}` | `https://${string}`;

export type GetProductDetailQueryResponse = {
  active: boolean;
  description: string;
  id: string;
  image: URL;
  promo: boolean;
  rating: rating;
  name: string;
};

export type Meta = {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

export type GetProductsQueryResponse = {
  items: GetProductDetailQueryResponse[];
  meta: Meta;
};

export type GetProductsParams = {
  search?: string | null;
  limit?: number | null;
  page?: number | null;
  promo?: boolean | null;
  active?: boolean | null;
};

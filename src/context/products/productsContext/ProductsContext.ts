import { createContext } from 'react';

import { ProductsContextValue } from './ProductsContext.types';

export const ProductsContext = createContext<ProductsContextValue | undefined>(undefined);

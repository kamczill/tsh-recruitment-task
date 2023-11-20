import React, { useState } from 'react';

import { ProductsContext } from '../productsContext/ProductsContext';
import { Data, ProductsContextValue } from '../productsContext/ProductsContext.types';

import { ProductsContextControllerProps } from './ProductsContextController.types';

export const ProductsContextController = ({ children }: ProductsContextControllerProps) => {
  const [data, setData] = useState<Data>({ items: [], meta: {} });

  const value: ProductsContextValue = {
    data,
    setData,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

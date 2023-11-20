// import { useProducts, useQuery } from 'hooks';
import { useContext } from 'react';

import { ProductsContext } from 'context/products/productsContext/ProductsContext';
import { ProductCard } from 'ui/productCard/ProductCard';
import { ProductCardProps } from 'ui/productCard/ProductCard.types';

export const Home = () => {
  const context = useContext(ProductsContext);
  // const {isLoading, isSuccess, isError, isFetching} = useProducts();

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-6 mt-6 lg:max-w-[1224px]">
          {context?.data?.items?.map((prod: ProductCardProps) => (
            <ProductCard
              key={prod.id}
              active={prod.active}
              description={prod.description}
              id={prod.id}
              image={prod.image}
              promo={prod.promo}
              rating={prod.rating}
              name={prod.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

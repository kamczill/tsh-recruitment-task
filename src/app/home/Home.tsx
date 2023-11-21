import { useContext } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useProducts } from 'hooks';
import { ProductsContext } from 'context/products/productsContext/ProductsContext';
import { ProductCard } from 'ui/productCard/ProductCard';
import { ProductCardProps } from 'ui/productCard/ProductCard.types';
import { Loader, NoSearchResults } from 'ui';

import { Pagination } from './pagination/Pagination';

export const Home = () => {
  const context = useContext(ProductsContext);
  const { isLoading, isSuccess, isError } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(context?.data.meta.currentPage || 1);
  const totalPages = context?.data.meta.totalPages || 1;
  const isEmpty = context?.data.meta.itemCount === 0;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    searchParams.set('page', String(newPage));
    setSearchParams(searchParams);
  };

  const renderProductCards = () => {
    return context?.data.items.map((prod: ProductCardProps) => (
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
    ));
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-14 grow mt-6 mb-14 lg:mt-14">
        {isSuccess && !isEmpty && (
          <>
            <div className="flex flex-wrap justify-center gap-6 lg:max-w-[1224px]">{renderProductCards()}</div>
            <Pagination totalPages={totalPages || 1} currentPage={currentPage} onPageChange={handlePageChange} />
          </>
        )}
        {isLoading && <Loader />}

        {isSuccess && isEmpty && <NoSearchResults />}

        {isError && <p className="text-almostBlack text-xl leading-10 font-semibold">Something went wrong</p>}
      </div>
    </>
  );
};

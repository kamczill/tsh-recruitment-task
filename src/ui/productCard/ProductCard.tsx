import { useState } from 'react';

import { FilledStarIcon } from 'assets/icons/FilledStarIcon';
import { OutlineStarIcon } from 'assets/icons/OutlineStarIcon';
import { PromoBadge } from 'ui/promoBadge/PromoBadge';
import { ProductButton } from 'ui/productButton/ProductButton';
import { Modal } from 'ui/modal/Modal';

import { ProductCardProps } from './ProductCard.types';

export const ProductCard = ({ active, description, id, image, name, promo, rating }: ProductCardProps) => {
  const [loadedImage, setLoadedImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const RatingStars = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    const stars = Array.from({ length: totalStars }, (_, index) => {
      if (index < rating) {
        return <FilledStarIcon color="#F9A52B" key={index} />;
      }
      return <OutlineStarIcon color="#B1B5C9" key={index} />;
    });

    return <div className="flex gap-2">{stars}</div>;
  };

  return (
    <div className="bg-white w-full max-w-[288px] flex flex-col rounded-md" data-product-id={id}>
      <div className="w-full h-[170px] relative">
        {!loadedImage && (
          <div className="animate-pulse flex space-x-4 w-full h-full">
            <div className=" bg-coolGray h-full w-full"></div>
          </div>
        )}
        <img
          src={image}
          alt={name}
          onLoad={() => setLoadedImage(true)}
          className={`${
            loadedImage ? 'block opacity-100' : 'none'
          } transition-opacity opacity-0 w-full h-full object-cover rounded-t-md`}
        />
        {promo && <PromoBadge />}
      </div>
      <article className="mt-4 flex flex-col justify-between gap-7 px-4 h-[230px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-almostBlack font-semibold text-lg leading-4">{name}</h2>
          <p className="text-darkGray text-sm leading-4">{description}</p>
        </div>
        <div className="flex flex-col gap-3 pb-6">
          <RatingStars rating={rating} />
          <ProductButton active={active} onClick={handleOpenModal} />
        </div>
      </article>
      {isModalOpen && <Modal onClose={handleCloseModal} productId={id} />}
    </div>
  );
};

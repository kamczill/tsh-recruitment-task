import { FilledStarIcon } from 'assets/icons/FilledStarIcon';
import { OutlineStarIcon } from 'assets/icons/OutlineStarIcon';

type URL = `http://${string}` | `https://${string}`;
type rating = 1 | 2 | 3 | 4 | 5;

type ProductCardProps = {
  active: boolean;
  description: string;
  id: string;
  image: URL;
  promo: boolean;
  rating: rating;
  name: string;
};

export const ProductCard = ({ active, description, id, image, name, promo, rating }: ProductCardProps) => {
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

  type ProductButtonProps = {
    active: boolean;
  };

  const ProductButton = ({ active }: ProductButtonProps) => (
    <>
      {active ? (
        <button className="bg-primaryBlue text-white rounded-lg w-full text-center py-3 text-sm leading-4">
          Show details
        </button>
      ) : (
        <button className="bg-darkGray text-white rounded-lg w-full text-center py-3 text-sm leading-4" disabled>
          Unavailable
        </button>
      )}
    </>
  );

  const PromoBadge = () => (
    <div className="absolute top-[20px] left-0 bg-brightOrange px-4 py-1">
      <span className="text-white text-sm leading-4">Promo</span>
    </div>
  );

  return (
    <div className="bg-white w-full max-w-[288px] flex flex-col rounded-md" data-product-id={id}>
      <div className="w-full max-h-[170px] relative">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-t-md" />
        {promo && <PromoBadge />}
      </div>
      <article className="mt-4 flex flex-col justify-between gap-7 px-4 h-[230px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-almostBlack font-semibold text-lg leading-4">{name}</h2>
          <p className="text-darkGray text-sm leading-4">{description}</p>
        </div>
        <div className="flex flex-col gap-3 pb-6">
          <RatingStars rating={rating} />
          <ProductButton active={active} />
        </div>
      </article>
    </div>
  );
};

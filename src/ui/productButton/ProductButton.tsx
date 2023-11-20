import { ProductButtonProps } from './ProductButton.types';

export const ProductButton = ({ active }: ProductButtonProps) => {
  return (
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
};

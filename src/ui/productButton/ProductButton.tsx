import { ProductButtonProps } from './ProductButton.types';

export const ProductButton = ({ active, onClick }: ProductButtonProps) => {
  return (
    <>
      {active ? (
        <button
          onClick={onClick}
          className="bg-primaryBlue text-white rounded-lg w-full text-center py-3 text-sm leading-4 hover:bg-darkBlue"
        >
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

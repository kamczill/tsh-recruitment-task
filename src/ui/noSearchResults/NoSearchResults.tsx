import { BoardIcon } from 'assets/icons/BoardIcon';

export const NoSearchResults = () => {
  return (
    <div className="bg-white w-full h-screen max-h-[344px] max-w-[600px] flex flex-col items-center justify-center gap-6">
      <div>
        <BoardIcon color="#B9BDCF" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold leading-4 text-center">Ooops… It’s empty here</h3>
        <span className="text-darkGray text-center leading-4">There are no products on the list</span>
      </div>
    </div>
  );
};

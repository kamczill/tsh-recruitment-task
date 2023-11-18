import { SearchIcon } from 'assets/icons/SearchIcon';
import { CheckboxWithLabel } from 'ui/checkboxWithLabel/CheckboxWithLabel';

const SearchField = () => {
  return (
    <fieldset className="w-full flex flex-col gap-6 lg:flex-row">
      <div className="max-h-[48px] flex justify-between px-4 py-3 border border-lighterGray rounded-xl lg:w-full lg:max-w-[348px]">
        <input placeholder="Search" className="placeholder-almostBlack" />
        <SearchIcon color="#1A1B1D" />
      </div>
      <div className="flex gap-7">
        <CheckboxWithLabel label="Active" checked={true} onChange={() => {}} />
        <CheckboxWithLabel label="Promo" checked={false} onChange={() => {}} />
      </div>
    </fieldset>
  );
};

export { SearchField };

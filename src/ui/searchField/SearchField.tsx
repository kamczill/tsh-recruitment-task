import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchIcon } from 'assets/icons/SearchIcon';
import { CheckboxWithLabel } from 'ui/checkboxWithLabel/CheckboxWithLabel';

export const SearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isActive, setIsActive] = useState<boolean>(searchParams.get('active') === 'true');
  const [isPromo, setIsPromo] = useState<boolean>(searchParams.get('promo') === 'true');
  const [searchValue, setSearchValue] = useState<string>(searchParams.get('search') || '');

  const handleChangeActiveParam = () => setIsActive((prev) => !prev);
  const handleChangePromoParam = () => setIsPromo((prev) => !prev);
  const handleChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value);

  const handleDebouncedEffect = (key: string, value: boolean | string) => {
    const timeoutId = setTimeout(() => {
      if (typeof value === 'boolean') {
        value ? searchParams.set(key, 'true') : searchParams.delete(key);
      } else {
        value ? searchParams.set(key, value) : searchParams.delete(key);
      }
      searchParams.delete('page');
      setSearchParams(searchParams);
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    setIsActive(searchParams.get('active') === 'true');
    setIsPromo(searchParams.get('promo') === 'true');
    setSearchValue(searchParams.get('search') || '');
  }, [searchParams]);

  useEffect(() => handleDebouncedEffect('active', isActive), [isActive]);
  useEffect(() => handleDebouncedEffect('promo', isPromo), [isPromo]);
  useEffect(() => handleDebouncedEffect('search', searchValue), [searchValue]);

  return (
    <fieldset className="w-full flex flex-col gap-6 lg:flex-row">
      <div className="max-h-[48px] flex justify-between items-center px-4  border border-lighterGray rounded-xl overflow-hidden lg:w-full lg:max-w-[348px]">
        <input
          placeholder="Search"
          className="py-3 w-full placeholder-almostBlack focus:outline-none"
          value={searchValue}
          onChange={handleChangeSearchValue}
        />
        <SearchIcon color="#1A1B1D" />
      </div>
      <div className="flex gap-7">
        <CheckboxWithLabel label="Active" checked={isActive} onChange={handleChangeActiveParam} />
        <CheckboxWithLabel label="Promo" checked={isPromo} onChange={handleChangePromoParam} />
      </div>
    </fieldset>
  );
};

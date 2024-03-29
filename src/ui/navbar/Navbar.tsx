import { Link } from 'react-router-dom';

import { LoginButton } from 'ui/loginButton/LoginButton';
import { SearchField } from 'ui/searchField/SearchField';

export const Navbar = () => {
  return (
    <header className="flex justify-center bg-white">
      <div className="w-full px-6 py-8 flex flex-col gap-6 lg:flex-row lg:gap-[108px] lg:max-w-[1224px] 2xl:px-0 ">
        <div className="flex justify-between align-center">
          <Link to="/">
            <h3 className="font-semibold text-2xl text-almostBlack leading-10">join.tsh.io</h3>
          </Link>
          <LoginButton classes="lg:hidden" />
        </div>
        <div className="w-full flex items-center justify-between">
          <SearchField />
          <LoginButton classes="hidden lg:block" />
        </div>
      </div>
    </header>
  );
};

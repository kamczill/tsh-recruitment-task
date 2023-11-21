import { Outlet } from 'react-router-dom';
import './Layout.css';

import { Navbar } from 'ui/navbar/Navbar';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-6 max-h-full grow flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

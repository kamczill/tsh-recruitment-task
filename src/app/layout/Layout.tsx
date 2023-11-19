import { Outlet } from 'react-router-dom';
import './Layout.css';

import { Navbar } from 'ui/navbar/Navbar';

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-6">
        <Outlet />
      </main>
    </div>
  );
};

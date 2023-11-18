import { Outlet } from 'react-router-dom';
import './Layout.css';

import Navbar from 'ui/navbar/Navbar';

export const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <Outlet />
      </main>
    </div>
  );
};

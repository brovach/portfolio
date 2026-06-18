import React from 'react';
import { Outlet } from 'react-router-dom';
import Scene from '../Scene/Scene';
import ThemeToggle from '../ThemeToggle';

const Layout: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Scene />
      <main className="relative z-10">
        <Outlet />
      </main>
      <div className="scanlines" aria-hidden="true" />
      <ThemeToggle />
    </div>
  );
};

export default Layout;

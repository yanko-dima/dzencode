import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';

export const Main = () => {
  return (
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <NavigationMenu />

          <div className="col py-2">
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

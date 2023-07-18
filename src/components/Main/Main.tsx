import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../SideBar/SideBar';

export const Main = () => {
  return (
    <main className="main">
      <SideBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

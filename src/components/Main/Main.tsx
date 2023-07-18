import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const Main = () => {
  return (
    <main className="main">
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

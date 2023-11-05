import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={'Loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;

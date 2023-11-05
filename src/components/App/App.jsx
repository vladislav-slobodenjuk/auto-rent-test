import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Container } from './App.styled';
// import CatalogPage from '../../pages/FirstPage/CatalogPage';
// import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import SharedLayout from '../SharedLayout/SharedLayout';
import HalfPage from '../../pages/HalfPage/HalfPage';

// const LazyHome = lazy(() => import('../../Pages/Home'));
const LazyCatalogPage = lazy(() =>
  import('../../pages/CatalogPage/CatalogPage'),
);
const LazyFavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage'),
);

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/catalog" element={<LazyCatalogPage />} />
          <Route path="/favorites" element={<LazyFavoritesPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Container>
  );
}
export default App;

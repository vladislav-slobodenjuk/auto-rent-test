import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from '../SharedLayout/SharedLayout';

const LazyHomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const LazyCatalogPage = lazy(() =>
  import('../../pages/CatalogPage/CatalogPage'),
);
const LazyFavoritesPage = lazy(() =>
  import('../../pages/FavoritesPage/FavoritesPage'),
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="/catalog" element={<LazyCatalogPage />} />
        <Route path="/favorites" element={<LazyFavoritesPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
export default App;

import { Navigate, Route, Routes } from 'react-router-dom';

import { Container } from './App.styled';
import FirstPage from '../../pages/FirstPage/FirstPage';
import SecondPage from '../../pages/SecondPage/SecondPage';
import SharedLayout from '../SharedLayout/SharedLayout';
import HalfPage from '../../pages/HalfPage/HalfPage';

// const LazyHome = lazy(() => import('../../Pages/Home'));
// const LazyMovies = lazy(() => import('../../Pages/Movies'));
// const LazyMovieDetails = lazy(() => import('../../Pages/MovieDetails'));

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Container>
  );
}
export default App;

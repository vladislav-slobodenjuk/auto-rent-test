import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectIsLastPage,
  selectIsLoading,
} from '../../redux/selectors';
import { getCarsThunk } from '../../redux/operations';

import { SectionTitle, StyledSection } from './CatalogPage.styled';
import AutoGallery from '../../components/AutoGallery/AutoGallery';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import Toolbar from '../../components/ToolBar/Toolbar';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCarsThunk({ page }));
  }, [page, dispatch]);

  const showLoadMore = !isLastPage && !isLoading && cars.length > 0;

  return (
    <>
      <Toolbar page={page} />
      <StyledSection>
        <SectionTitle $hidden>Auto Gallery</SectionTitle>
        {cars.length == 0 && !isLoading && (
          <p style={{ alignSelf: 'center' }}>Nothing found</p>
        )}
        <AutoGallery cars={cars} />
        {showLoadMore && <LoadMoreButton onClick={() => setPage(page + 1)} />}
      </StyledSection>
    </>
  );
};

export default CatalogPage;

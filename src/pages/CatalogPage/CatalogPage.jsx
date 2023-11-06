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
  const [params, setParams] = useState({ page: 1 });

  useEffect(() => {
    dispatch(getCarsThunk({ ...params }));
  }, [params, dispatch]);

  const decrementPage = () => setParams({ ...params, page: params.page + 1 });

  const showLoadMore = !isLastPage && !isLoading && cars.length > 0;
  const showEmptyResult = cars.length == 0 && !isLoading;

  return (
    <>
      <Toolbar params={params} setParams={setParams} />
      <StyledSection>
        <SectionTitle $hidden>Auto Gallery</SectionTitle>
        {showEmptyResult && (
          <p style={{ alignSelf: 'center' }}>Nothing found</p>
        )}
        <AutoGallery cars={cars} />
        {showLoadMore && <LoadMoreButton onClick={decrementPage} />}
      </StyledSection>
    </>
  );
};

export default CatalogPage;

import { useEffect, useState } from 'react';
import { SectionTitle, StyledSection } from './CatalogPage.styled';
// import { MAKES } from '../../constants/makes';
import { useDispatch, useSelector } from 'react-redux';

import AutoGallery from '../../components/AutoGallery/AutoGallery';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';

import {
  selectCars,
  selectIsLastPage,
  selectIsLoading,
} from '../../redux/selectors';
import { getCarsThunk } from '../../redux/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1);

  // console.log(MAKES);

  useEffect(() => {
    dispatch(getCarsThunk({ page }));
  }, [page, dispatch]);

  return (
    <>
      <StyledSection>
        <SectionTitle $hidden>Catalog Page</SectionTitle>
        <AutoGallery cars={cars} />
        {!isLastPage && !isLoading && (
          <LoadMoreButton onClick={() => setPage(page + 1)} />
        )}
      </StyledSection>
    </>
  );
};

export default CatalogPage;

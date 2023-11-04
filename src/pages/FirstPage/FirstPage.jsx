import { useEffect } from 'react';
import { Container, Title } from './FirstPage.styled';
// import { MAKES } from '../../constants/makes';
import { useDispatch, useSelector } from 'react-redux';

import AutoGallery from '../../components/AutoGallery/AutoGallery';

import { selectCars } from '../../redux/selectors';
import { getAllCarsThunk } from '../../redux/operations';

const FirstPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  // console.log(MAKES);
  // console.log(cars);

  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Title>First Page</Title>
        <AutoGallery cars={cars} />
      </Container>
    </>
  );
};

export default FirstPage;

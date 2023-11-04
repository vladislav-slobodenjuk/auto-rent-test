import { useEffect, useState } from 'react';
import { Container, Title } from './FirstPage.styled';
// import { MAKES } from '../../constants/makes';
// import { getAllCars, getCarDyId } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../components/Modal/Modal';
import AutoGallery from '../../components/AutoGallery/AutoGallery';

import { selectCars } from '../../redux/selectors';
import { getAllCarsThunk } from '../../redux/operations';

const FirstPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // console.log(MAKES);
  // console.log(cars);

  useEffect(() => {
    dispatch(getAllCarsThunk());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Title>First Page</Title>
        <button onClick={toggleModal}>Test</button>
        <AutoGallery cars={cars} />
      </Container>
      {isModalOpen && (
        <Modal closeModal={toggleModal}>
          <div>sdfsadfsdf</div>
        </Modal>
      )}
    </>
  );
};

export default FirstPage;

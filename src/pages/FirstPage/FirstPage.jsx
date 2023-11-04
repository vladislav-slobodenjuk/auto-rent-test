import { useEffect, useState } from 'react';
import { Container, Title } from './FirstPage.styled';
// import { MAKES } from '../../constants/makes';
// import { getAllCars, getCarDyId } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarsThunk } from '../../redux/operations';
import { selectCars } from '../../redux/selectors';
import Modal from '../../components/Modal/Modal';

const FirstPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {cars.length > 0 &&
          cars.map((car) => (
            <p key={car.id}>{`${car.id} ${car.make} ${car.model}`}</p>
          ))}
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

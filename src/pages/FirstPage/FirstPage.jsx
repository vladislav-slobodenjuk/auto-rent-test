import { Container, Title, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';
import { MAKES } from '../../constants/makes';
import { getAllCars, getCarDyId } from '../../api/api';
import { useEffect } from 'react';

const FirstPage = () => {
  console.log(MAKES);

  useEffect(() => {
    const first = async () => {
      const result = await getAllCars();
      console.log(result);
    };
    first();

    const second = async (id) => {
      const res = await getCarDyId(id);
      console.log(res);
    };
    second(9598);
  }, []);

  return (
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;

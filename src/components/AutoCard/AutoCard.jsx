import { StyledAutoCard } from './AutoCard.styled';

const AutoCard = ({ auto }) => {
  const {
    img,
    year,
    make,
    type,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
    id,
  } = auto;

  // console.log(auto);

  return (
    <StyledAutoCard>
      <div className="imgWrapper">
        <img src={img} alt={`${make} ${type}`} />
        {/* <p>{`${auto.id} ${auto.make} ${auto.model}`}</p> */}
      </div>
      <div></div>
    </StyledAutoCard>
  );
};

export default AutoCard;

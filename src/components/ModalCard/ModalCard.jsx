import { parseAddress } from '../../utils/utils';
import { StyledPropItem } from '../AutoCard/AutoCard.styled';
import Button from '../Button/Button';
import {
  ConditionItem,
  ConditionsLIst,
  Description,
  ModalPropLIst,
  ModalSubTitle,
  ModalTitle,
  PropListWrapper,
  StyledImage,
  StyledImgWrapper,
  StyledModalCard,
} from './ModalCard.styled';

const ModalCard = ({ auto }) => {
  const {
    img,
    year,
    make,
    model,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
    address,
    id,
  } = auto;

  const parsedConditions = rentalConditions.split('\n');
  const { city, country } = parseAddress(address);

  const firstRowData = [
    city,
    country,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
  ];

  const secondRowData = [
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  return (
    <StyledModalCard>
      <StyledImgWrapper>
        <StyledImage src={img} alt={`${make} ${model}`} />
      </StyledImgWrapper>
      <ModalTitle>
        {make} <span>{model}</span>, {year}
      </ModalTitle>
      <PropListWrapper>
        <ModalPropLIst>
          {firstRowData.map((text, idx) => (
            <StyledPropItem key={idx}>
              {text}
              <span>|</span>
            </StyledPropItem>
          ))}
        </ModalPropLIst>
        <ModalPropLIst>
          {secondRowData.map((text, idx) => (
            <StyledPropItem key={idx}>
              {text}
              <span>|</span>
            </StyledPropItem>
          ))}
        </ModalPropLIst>
      </PropListWrapper>
      <Description>{description}</Description>
      <ModalSubTitle>Accessories and functionalities:</ModalSubTitle>
      <PropListWrapper>
        <ModalPropLIst>
          {accessories.map((text, idx) => (
            <StyledPropItem key={idx}>
              {text}
              <span>|</span>
            </StyledPropItem>
          ))}
        </ModalPropLIst>
        <ModalPropLIst>
          {functionalities.map((text, idx) => (
            <StyledPropItem key={idx}>
              {text}
              <span>|</span>
            </StyledPropItem>
          ))}
        </ModalPropLIst>
      </PropListWrapper>
      <ModalSubTitle>Rental Conditions:</ModalSubTitle>
      <ConditionsLIst>
        {parsedConditions.map((text, idx) => (
          <ConditionItem key={idx}>{text}</ConditionItem>
        ))}
        <ConditionItem>
          Mileage: <span>{mileage.toLocaleString('en-US')}</span>
        </ConditionItem>
        <ConditionItem>
          Price: <span>{rentalPrice}</span>
        </ConditionItem>
      </ConditionsLIst>
      <Button href="tel:+380730000000" text={'Rental car'} as={'a'} />
    </StyledModalCard>
  );
};

export default ModalCard;

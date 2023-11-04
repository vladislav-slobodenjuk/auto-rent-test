import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import {
  StyledAutoCard,
  StyledCardBody,
  StyledCardHeader,
  StyledImage,
  StyledImageOverlay,
  StyledImgWrapper,
  StyledPrice,
  StyledPropItem,
  StyledPropLIst,
  StyledTitle,
} from './AutoCard.styled';

const AutoCard = ({ auto }) => {
  const {
    img,
    year,
    make,
    model,
    type,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    id,
  } = auto;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [_, city, country] = address.split(',');

  const data = [city, country, rentalCompany, type, model, id, accessories[0]];

  return (
    <>
      <StyledAutoCard>
        <StyledImgWrapper>
          <StyledImage src={img} alt={`${make} ${model}`} />
          <StyledImageOverlay />
        </StyledImgWrapper>
        <StyledCardHeader>
          <StyledTitle>
            {make} <span>{model}</span>, {year}
          </StyledTitle>
          <StyledPrice>{rentalPrice}</StyledPrice>
        </StyledCardHeader>
        <StyledCardBody>
          <StyledPropLIst>
            {data.map((text, idx) => (
              <StyledPropItem key={idx}>
                {text}
                <span>|</span>
              </StyledPropItem>
            ))}
          </StyledPropLIst>
        </StyledCardBody>
        <Button $wide text="Learn more" onClick={toggleModal} />
      </StyledAutoCard>
      {isModalOpen && (
        <Modal closeModal={toggleModal}>
          <div>sdfsadfsdf</div>
        </Modal>
      )}
    </>
  );
};

export default AutoCard;

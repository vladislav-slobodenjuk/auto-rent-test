import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../redux/advertsSlice';
import { selectFavorites } from '../../redux/selectors';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import FavoriteButton from './FavoriteButton/FavoriteButton';
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

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isSaved = favorites.find((savedAto) => savedAto.id === auto.id);

  const handleFavorite = () => {
    if (!isSaved) dispatch(addFavorite(auto));
    if (isSaved) dispatch(deleteFavorite(auto));
  };

  // eslint-disable-next-line no-unused-vars
  const [_, city, country] = address.split(', ');

  const data = [city, country, rentalCompany, type, model, id, accessories[0]];

  return (
    <>
      <StyledAutoCard>
        <StyledImgWrapper>
          <StyledImage src={img} alt={`${make} ${model}`} loading="lazy" />
          <StyledImageOverlay />
          <FavoriteButton $isSaved={isSaved} onClick={handleFavorite} />
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

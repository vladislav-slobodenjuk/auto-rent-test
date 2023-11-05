import { StyledFavoriteButton } from './FavoriteButton.styled';
import sprite from '../../../assets/sprite.svg';

const FavoriteButton = (props) => {
  return (
    <StyledFavoriteButton {...props}>
      <svg width="18" height="18">
        <use href={`${sprite}#heart`} stroke="currentColor"></use>
      </svg>
    </StyledFavoriteButton>
  );
};

export default FavoriteButton;

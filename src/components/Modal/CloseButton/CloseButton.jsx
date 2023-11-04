import { StyledCloseButton } from './CloseButton.styled';
import sprite from '../../../assets/sprite.svg';

const CloseButton = ({ closeModal }) => {
  return (
    <StyledCloseButton onClick={closeModal}>
      <svg width="24" height="24">
        <use href={`${sprite}#close`} stroke="currentColor"></use>
      </svg>
    </StyledCloseButton>
  );
};

export default CloseButton;

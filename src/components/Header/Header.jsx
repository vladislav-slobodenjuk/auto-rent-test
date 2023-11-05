import {
  StyledHeader,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <Navigation>
        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Main
        </StyledLink>
        <StyledLink to="/catalog">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Catalog
        </StyledLink>
        <StyledLink to="/favorites">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Favorites
        </StyledLink>
      </Navigation>
    </StyledHeader>
  );
};

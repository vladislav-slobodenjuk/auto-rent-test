import { StyledHeader, Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Navigation>
        <StyledLink to="/">Main</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
    </StyledHeader>
  );
};

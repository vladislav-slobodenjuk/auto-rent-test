import { useSelector } from 'react-redux';
import AutoGallery from '../../components/AutoGallery/AutoGallery';
import { SectionTitle, StyledSection } from '../CatalogPage/CatalogPage.styled';
import { selectFavorites } from '../../redux/selectors';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <StyledSection>
      <SectionTitle $hidden>Favorites Gallery</SectionTitle>
      <AutoGallery cars={favorites} />
    </StyledSection>
  );
};

export default FavoritesPage;

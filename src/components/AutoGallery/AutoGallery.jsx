import { StyledAutoList } from './AutoGallery.styled';
import AutoCard from '../AutoCard/AutoCard';

const AutoGallery = ({ cars }) => {
  return (
    <StyledAutoList>
      {cars.length > 0 &&
        cars.map((auto) => (
          <li key={auto.id}>
            <AutoCard auto={auto} />
          </li>
        ))}
    </StyledAutoList>
  );
};

export default AutoGallery;

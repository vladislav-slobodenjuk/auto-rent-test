import styled from 'styled-components';

export const StyledFavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  padding: 0;
  line-height: 0;

  fill: ${({ isSaved }) => (isSaved ? '#3470ff' : 'transparent')};
  color: ${({ isSaved }) => (isSaved ? '#3470ff' : '#ffffffcc')};
  background-color: transparent;
  border: none;
  transition: all 0.3s ease-out;
`;

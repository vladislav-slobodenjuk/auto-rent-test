import styled from 'styled-components';

export const StyledLoadMoreButton = styled.button`
  align-self: center;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  text-decoration-line: underline;
  color: #3470ff;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-out;

  &:hover {
    color: #0b44cd;
    transition: all 0.3s ease-out;
  }
`;

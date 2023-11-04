import styled from 'styled-components';

export const StyledButton = styled.button`
  justify-self: end;
  padding-block: 12px;
  padding-inline: ${({ wide }) => (wide ? '99px' : '50px')};

  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14); /* 142.857% */

  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #0b44cd;
    transition: all 0.3s ease-out;
  }
`;

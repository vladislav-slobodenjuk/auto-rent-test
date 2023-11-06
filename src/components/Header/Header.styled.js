import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  padding: 8px 0;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  font-family: Manrope;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px; /* 150% */
  color: #121417;

  transition: all 0.3s ease;

  &:hover,
  &:focus,
  &.active {
    color: #3470ff;
    transition: all 0.3s ease;
  }
`;

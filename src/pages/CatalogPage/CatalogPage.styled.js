import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`;

export const SectionTitle = styled.h2`
  width: ${({ $hidden }) => ($hidden ? 0 : 'unset')};
  height: ${({ $hidden }) => ($hidden ? 0 : 'unset')};
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
`;

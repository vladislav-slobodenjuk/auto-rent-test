import styled from 'styled-components';

export const StyledAutoList = styled.ul`
  display: grid;
  /* max-width: calc(100vw - 48px); */
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));

  grid-column-gap: 29px;
  grid-row-gap: 50px;
  /* margin-top: 0; */
  /* margin-bottom: 0; */
  /* padding: 0; */
  /* list-style: none; */
  /* margin-left: auto; */
  /* margin-right: auto; */
`;

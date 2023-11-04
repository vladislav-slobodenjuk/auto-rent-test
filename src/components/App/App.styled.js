import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;

export const Container = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  /* grid-gap: 16px; */

  /* padding: 0 16px; */
  margin: 0 auto;
  width: 320px;

  transition: all 0.5s;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding-inline: 128px;
    width: 1440px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-inline: 32px;

  width: 320px;

  transition: all 0.5s;

  @media screen and (min-width: 768px) {
    padding-inline: 64px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding-inline: 128px;
    width: 1440px;
  }
`;

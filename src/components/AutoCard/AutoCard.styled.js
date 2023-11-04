import styled from 'styled-components';

export const StyledAutoCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledImage = styled.img`
  height: 268px;
  object-fit: cover;
`;
export const StyledImgWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;

  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
`;

export const StyledImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */

  color: #121417;

  & span {
    color: #3470ff;
  }
`;

export const StyledPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  color: #121417;
`;

export const StyledCardBody = styled.div`
  flex-grow: 1;
  margin-bottom: 28px;
`;

export const StyledPropLIst = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledPropItem = styled.li`
  span {
    margin-inline: 6px;
  }

  &:last-child {
    span {
      display: none;
    }
  }
`;

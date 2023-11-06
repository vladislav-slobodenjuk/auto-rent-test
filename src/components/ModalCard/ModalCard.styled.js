import styled from 'styled-components';
import { StyledPropLIst, StyledTitle } from '../AutoCard/AutoCard.styled';

export const StyledModalCard = styled.div`
  /* padding: 10px; */
`;
export const StyledImgWrapper = styled.div`
  margin-bottom: 14px;
  width: 460px;
  height: 248px;
  border-radius: 14px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  object-fit: cover;
`;

export const ModalTitle = styled(StyledTitle)`
  margin-bottom: 8px;
  font-size: 18px;
`;
export const PropListWrapper = styled.div`
  margin-bottom: 14px;
`;
export const ModalPropLIst = styled(StyledPropLIst)`
  margin-bottom: 4px;
`;
export const Description = styled.p`
  margin-bottom: 24px;
  font-family: Manrope;
  font-size: 14px;
  line-height: calc(20 / 14); /* 142.857% */
  color: #121417;
`;

export const ModalSubTitle = styled(ModalTitle)`
  font-size: 14px;
  line-height: calc(20 / 14); /* 142.857% */
`;
export const functionalitiesWrapper = styled.div`
  margin-bottom: 24px;
`;
export const ConditionsLIst = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;
export const ConditionItem = styled.li`
  padding: 7px 14px;
  margin-bottom: 8px;
  border-radius: 35px;
  background-color: #f9f9f9;

  &:not(:last-child) {
    margin-right: 8px;
  }

  & span {
    color: #3470ff;
  }
`;

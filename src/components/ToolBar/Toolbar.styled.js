import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledToolbar = styled.section`
  margin-bottom: 50px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 50px;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14); /* 128.571% */
  color: #8a8a89;

  & label {
    margin-bottom: 8px;
  }

  & .placeholder {
    display: none;
  }
`;

export const ToolWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 18px;
  }

  & p {
    margin-bottom: 8px;
  }
`;

export const MileageWrapper = styled.div`
  & :first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }
  & :last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const makeSelectStyles = {
  width: '224px',
  paddingBlock: '14px',
  paddingRight: '68px',
  paddingLeft: '18px',
  fontFamily: 'Manrope',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: 'calc(20 / 18)',
  color: '#121417',
  backgroundColor: '#f7f7fb',
  borderRadius: ' 14px',
  border: 'none',
  outline: 'none',
};

export const PriceSelectStyles = {
  width: '125px',
  paddingBlock: '14px',
  paddingRight: '18px',
  paddingLeft: '18px',
  fontFamily: 'Manrope',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: 'calc(20 / 18)',
  color: '#121417',
  backgroundColor: '#f7f7fb',
  borderRadius: ' 14px',
  border: 'none',
  outline: 'none',
};

export const StyledSelect = styled(Field)`
  padding-block: 14px;
  padding-right: 89px;
  padding-left: 18px;

  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18); /* 111.111% */

  color: #121417;
  background-color: #f7f7fb;
  border-radius: 14px;
  border: none;
  outline: none;

  & .placeholder {
    display: none;
  }
`;

export const StyledInput = styled(Field)`
  padding-block: 14px;
  padding-right: 41px;
  padding-left: 24px;
  width: 160px;

  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18); /* 111.111% */

  color: #121417;
  background-color: #f7f7fb;
  border-radius: 14px;
  border: none;
  outline: none;

  & .placeholder {
    display: none;
  }

  & ::placeholder {
    color: #121417;
  }
`;

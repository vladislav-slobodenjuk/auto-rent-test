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
`;

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

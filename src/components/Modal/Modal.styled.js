import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 40px;

  width: 541px;

  background-color: #fff;
  border-radius: 24px;
`;

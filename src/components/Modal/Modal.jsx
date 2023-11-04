import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalContainer, Overlay } from './Modal.styled';
import CloseButton from './CloseButton/CloseButton';

const Modal = ({ closeModal, children }) => {
  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) closeModal();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton closeModal={closeModal} />
        {children}
      </ModalContainer>
    </Overlay>,
    document.querySelector('#root'),
  );
};

export default Modal;

//import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { RxCross1 } from 'react-icons/rx';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.container}>
        <button className={css.icon} onClick={handleBackdropClick}>
          <span className={css.close}>
            <RxCross1 size="16px" onClick={handleBackdropClick} />
          </span>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

// Modal.propTypes = {

// };

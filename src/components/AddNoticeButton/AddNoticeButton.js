import { Modal } from '../../utilities/Modal/Modal';
import { ModalAddNotice } from '../ModalAddNotice/ModalAddNotice';
import { useState } from 'react';
import css from './AddNoticeButton.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { selectors } from '../../redux/auth/selectors';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export const AddNoticeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const isLogged = useSelector(selectors.isLogged);

  const toggleModal = () => {
    if (!isLogged) {
      return toast.warn(
        'The user must be logged in to use this functionality!'
      );
    }
    setShowModal(!showModal);
  };

  return (
    <>
  <button className={css.add_btn} type="button" onClick={toggleModal}>
        <AiOutlinePlus size={32} />  <span className={css.add_btn_text}>Add pet</span>
      </button>
      
     
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalAddNotice onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
};

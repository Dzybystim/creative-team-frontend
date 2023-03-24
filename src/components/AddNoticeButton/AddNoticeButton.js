import { Modal } from '../../utilities/Modal/Modal';
import { ModalAddNotice } from '../ModalAddNotice/ModalAddNotice';
import { useState } from 'react';
import css from './AddNoticeButton.module.css';
import { AiOutlinePlus } from 'react-icons/ai';


export const AddNoticeButton = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button className={css.add_btn} type="button" onClick={toggleModal}>
        <AiOutlinePlus size={32} />
        Add pet
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalAddNotice onClose={toggleModal}/>
        </Modal>
      )}
    </>
  );
};

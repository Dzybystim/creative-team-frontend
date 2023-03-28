import { Box } from '@chakra-ui/react';
import PetsList from '../PetsList/PetsList';
import { Modal } from '../../../utilities/Modal/Modal';
import { ModalAddsPet } from 'components/UserPage/PetsData/ModalAddsPet';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import css from './PetsData.module.css';
import { useState } from 'react';

const PetsData = ({ pets, setAddPet, addPet }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box ml={{ xl: '32px' }} w="100%">
      <div className={css.header_my_pets}>
        <h2 className={css.title}>My pets:</h2>{' '}
        <button onClick={toggleModal} type="button" className={css.button_add}>
          <p className={css.text_button}>Add pet</p>
          <BsFillPlusCircleFill className={css.icon_plus} />
        </button>
      </div>
      <PetsList pets={pets} setAddPet={setAddPet} addPet={addPet}/>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalAddsPet onClose={toggleModal} setAddPet={setAddPet} addPet={addPet}/>
        </Modal>
      )}
    </Box>
  );
};

export default PetsData;

import { Box, useDisclosure } from '@chakra-ui/react';
import PetsList from '../PetsList/PetsList';
import { Modal } from '../PetsData/Modal';
import { ModalAddsPet } from 'components/UserPage/PetsData/ModalAddsPet';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import css from './PetsData.module.css';

const PetsData = ({ pets }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Box ml={{ xl: '32px' }} w="100%">
      <div className={css.header_my_pets}>
        <h2 className={css.title}>My pets:</h2>
        {' '}
        <button onClick={onOpen} type="button" className={css.button_add}>
          <p className={css.text_button} >Add pet</p>
          <BsFillPlusCircleFill className={css.icon_plus} />
        </button>
      </div>
      <PetsList pets={pets} />
      <Modal isOpen={isOpen} onClose={onClose} title={'Add pet'}>
        <ModalAddsPet onClose={onClose} />
      </Modal>
    </Box>
  );
};

export default PetsData;

//import PropTypes from 'prop-types';

//import Pet from "./Pet/Pet";

// export default function PetsData() {
/*return (
    <>
      {error && <p>Error loading, please try again </p>}

      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <div>
          {visibleContacts.map(({ id, photo, name, birthday, breed, comments}) => (
            <Pet key={id} id={id} name={name} birthday={birthday}
            breed={breed} photo={photo} comments={comments}/>
          ))}
        </div>
      )}
    </>
  );*/
// }

/*PetsData.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      photo:PropTypes.image.isRequired,
      name: PropTypes.string.isRequired,
      birthday: PropTypes.number.isRequired,
      breed: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
    })
  ),
};
*/

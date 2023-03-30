import { Text, Flex } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import petDefaultAvatar from '../../../images/petDefaultAvatar.svg';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/auth/operations';
import css from './PetsList.module.css';


const PetsList = ({ pets, setAddPet, addPet }) => {


  const dispatch = useDispatch();
  const onDeleteBtnClick = (e, id) => {
    dispatch(deletePet(id));
    e.preventDefault();
  };

  return pets.length > 0 ? (
    <div>
      {pets.map(({ _id, name, date, breed, photoURL, comments }) => (
        <div key={_id} className={css.container_pets_list}>
          <div className={css.container_pets_img}>
            <img
              src={photoURL ?? petDefaultAvatar}
              alt="pet"
              className={css.pets_img}
            ></img>
          </div>
          <div className={css.container_button_ul_pets}>
            <button
              onClick={e => onDeleteBtnClick(e, _id)}
              type="button"
              className={css.button_delete_pet}
            >
              <div
                className={css.fon_delete_icon}
                onClick={() => setAddPet(!addPet)}
              >
                <DeleteIcon
                  
                  border="none"
                  className={css.icon_delete}
                />
              </div>
            </button>
            <ul className={css.ul_pets_info}>
              <li className={css.li_pets_info}>
                <p className={css.text_info_pets}>
                  <span className={css.title_info}>Name:</span> {name}
                </p>
              </li>
              <li className={css.li_pets_info}>
                <p className={css.text_info_pets}>
                  <span className={css.title_info}>Date of birth:</span> {date}
                </p>
              </li>
              <li className={css.li_pets_info}>
                <p className={css.text_info_pets}>
                  <span className={css.title_info}>Breed:</span> {breed}
                </p>
              </li>
              <li className={css.li_pets_info}>
                <p className={css.text_info_pets}>
                  <span className={css.title_info}>Comments:</span> {comments}
                </p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <Flex
      bgColor="accent.white"
      box-shadow="7px 4px 14px rgba(0, 0, 0, 0.11)"
      borderRadius="40px"
      direction={{ base: 'column', md: 'row', xl: 'row' }}
      mb={{ base: '20px', xl: '22px' }}
      px={{ base: '20px', md: '20px', xl: '28px' }}
      py={{ base: '40px', md: '20px', xl: '20px' }}
      w={{ base: '280px', md: '704px', xl: '821px' }}
    >
      <Text mx="auto"> You have no pets yet </Text>
    </Flex>
  );
};

export default PetsList;

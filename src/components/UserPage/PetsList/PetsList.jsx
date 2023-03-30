import { Text, Flex } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import petDefaultAvatar from '../../../images/petDefaultAvatar.svg';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/auth/operations';
import css from './PetsList.module.css';
// import { ImageListItemBar } from '@mui/material';

// import { getUser } from 'redux/auth/selectors';

// let test = [
//  {
//    _id: '1',
//     name: 'Rex',
//      birthday: '',
//      breed: 'breed',
//     photo:
//        'https://images.unsplash.com/photo-1586796314073-c9b40efb3d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
//      comments: 'ndustry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lo',
//    },
//    {
//      _id: '2',
//      name: 'Rex',
//      birthday: '',
//      breed: 'breed',
//      photo:
//       'https://images.unsplash.com/photo-1586796314073-c9b40efb3d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
//      comments: 'Cool',
//    },
//    {
//     _id: '3',
//      name: 'Rex',
//       birthday: '',
//       breed: 'breed',
//      photo:
//         'https://images.unsplash.com/photo-1586796314073-c9b40efb3d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
//       comments: 'ndustry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lo',
//     },
// ];

const PetsList = ({ pets, setAddPet, addPet }) => {
  console.log('pets:', pets);
  // const { pets = [] } = useSelector(getUser);

  let reversedPets = pets.reduce((accumulator, currentValue) => {
    return [currentValue, ...accumulator];
  }, []);
  console.log(reversedPets);
  const dispatch = useDispatch();
  const onDeleteBtnClick = (e, id) => {
    dispatch(deletePet(id));
    e.preventDefault();
  };

  return reversedPets.length > 0 ? (
    <div>
      {reversedPets.map(({ _id, name, date, breed, photoURL, comments }) => (
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
                  color="blackAlpha.500"
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

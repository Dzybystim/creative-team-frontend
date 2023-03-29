import { Modal } from '../../utilities/Modal/Modal';
import { useState, 
 // useEffect
 } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NoticeModal } from 'components/NoticeModal/NoticeModal';
import css from './NoticeCategoryItem.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiTrash } from 'react-icons/hi';
import { ReactComponent as IconHeart } from '../../images/icon_heart.svg';
import { ageCounter } from '../../utilities/ageCounter';

import { getNoticesById } from '../../utilities/helpers';
import { selectors } from '../../redux/auth/selectors';
import { selectFavorites } from '../../redux/notices/selectors';
import { deleteNotice } from '../../redux/notices/operations';
import { getUserIdFromLocalStorage } from '../../utilities/helpers';
import {
//  getAllSelectedNotices,
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/notices/operations';
import { toast } from 'react-toastify';


export const NoticeCategoryItem = ({ item,  }) => {
  const [showModal, setShowModal] = useState(false);
  const [notice, setNotice] = useState(null);
  const dispatch = useDispatch();
  const isLogged = useSelector(selectors.isLogged);
  const favorites = useSelector(selectFavorites);

const userId = getUserIdFromLocalStorage();

let categoryName;
switch (item.category) {
  case "lost-found":
    categoryName = 'lost/found';
    break;

  case "sell":
    categoryName = 'sell';
    break;

  case "for-free":
    categoryName = 'in good hands';
    break;

  default:
    console.log("Invalid subscription type");
}


  const handleAddOrDeleteFavorite = () => {
    if (!isLogged) {
      return toast.warn(
        'The user must be logged in to use this functionality!'
      );
    }
    if(!favorites.find(favorite => favorite._id === item._id)){
    dispatch(addToFavorite(item._id));
    toast.success(`This item has been successfully added to favorites!`);
    return;
    }
    dispatch(deleteFromFavorite(item._id));
    toast.success(`This item was successfully removed from favorites!`);
    return;
  };


  const removeNotices = () => {
    dispatch(deleteNotice(item._id));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = id => {
    getNoticesById(id)
      .then(data => {
        setNotice(data);
        setShowModal(!showModal);
      })
      .catch(error => {
        toast.error(
          `Oops, something went wrong! Reload the page or try again later!`
        );
        console.log('Error', error);
      });
  };


  return (
    <>

      <li className={css.item}>
        <div className={css.img_cover}>
          {item.imageURL ? (
            <img src={item.imageURL} className={css.img} alt="Pet" />
          ) : null}

{categoryName ? <p className={css.category}>{categoryName}</p>
        :  <p className={css.category}>{item.category}</p>}
          
            <button
              className={css.icon}
              type="button"
              onClick={handleAddOrDeleteFavorite}
            >
              {(!favorites.find(favorite => favorite._id === item._id)) ? (<AiOutlineHeart size={28} />) :(<IconHeart width={26} height={26} />) }
            </button>
          
        </div>
        <h3 className={css.title}>{item.title}</h3>

        <ul className={css.info}>
          <li className={css.info_item}>
            <p className={css.text}>Breed: </p>
            <p className={css.text}> {item.breed}</p>
          </li>
          <li className={css.info_item}>
            <p className={css.text}>Place: </p>
            <p className={css.text}>{item.location}</p>
          </li>
          <li className={css.info_item}>
            <p className={css.text}>Age: </p>
            {item.birthdate ? (
              <p className={css.text}>{ageCounter(item.birthdate)}</p>
            ) : (
              <p className={css.text}>Unknown</p>
            )}
          </li>

          {item.price ? (
            <li className={css.info_item}>
              <p className={css.text}>Price:</p>
              <p className={css.text}>{item.price}$</p>
            </li>
          ) : null}
        </ul>
        <div className={css.btn_cover}>
          <button
            className={css.btn}
            type="button"
            onClick={() => openModal(item._id)}
          >
            LearnMore
          </button>

          {isLogged && userId === item.owner && (
            <button className={css.btn} type="button" onClick={removeNotices}>
              Delete <HiTrash size={20} />
            </button>
          )}
        </div>
      </li>

      {showModal && (
        <Modal key={item.id} onClose={toggleModal}>
          <NoticeModal
           handleAddOrDeleteFavorite={handleAddOrDeleteFavorite}
            item={notice} categoryName={categoryName}
          />
        </Modal>
      )}
    </>
  );
};




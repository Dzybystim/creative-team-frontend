import { Modal } from '../../utilities/Modal/Modal';
import { useState, useEffect } from 'react';
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
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/notices/operations';

export const NoticeCategoryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [notice, setNotice] = useState(null);
  const dispatch = useDispatch();
  const isLogged = useSelector(selectors.isLogged);
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(null);

  const userId = getUserIdFromLocalStorage();

  let favoriteOrNot =
    (favorites.find(favorite => favorite._id === item._id) && true) || false;
  const firstFavorites = () => {
    setIsFavorite(favoriteOrNot);
  };

  useEffect(() => {
    firstFavorites();
  });

  useEffect(() => {
    if (isFavorite === true) {
      return;
    }
    return;
  }, [isFavorite]);

  const handleDeleteFromFavorite = () => {
    dispatch(deleteFromFavorite(item._id));
    setIsFavorite(!isFavorite);
  };

  const handleAddToFavorite = () => {
    dispatch(addToFavorite(item._id));
    setIsFavorite(!isFavorite);
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
        console.log('Error', error);
      });
  };

  const age = ageCounter(item.birthdate);

  return (
    <>
      <li className={css.item}>
        <div className={css.img}>
          <img src={item.imageURL} className={css.img} alt="Pet" />
          <p className={css.category}>{item.category}</p>

          {isFavorite ? (
            <button
              className={css.icon}
              type="button"
              onClick={handleDeleteFromFavorite}
            >
              <IconHeart width={26} height={26} />
            </button>
          ) : (
            <button
              className={css.icon}
              type="button"
              onClick={handleAddToFavorite}
            >
              <AiOutlineHeart size={28} />
            </button>
          )}
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
            <p className={css.text}>{age}</p>
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
            isFavorite={isFavorite}
            handleDeleteFromFavorite={handleDeleteFromFavorite}
            handleAddToFavorite={handleAddToFavorite}
            item={notice}
          />
        </Modal>
      )}
    </>
  );
};

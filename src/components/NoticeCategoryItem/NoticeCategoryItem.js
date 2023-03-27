import { Modal } from '../../utilities/Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NoticeModal } from 'components/NoticeModal/NoticeModal';
import css from './NoticeCategoryItem.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiTrash } from 'react-icons/hi';
import { ageCounter } from '../../utilities/ageCounter';

import { getNoticesById } from '../../utilities/helpers';
import { selectors } from '../../redux/auth/selectors';
import { deleteNotice } from '../../redux/notices/operations';

export const NoticeCategoryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [notice, setNotice] = useState(null);
  const dispatch = useDispatch();
  const isLogged = useSelector(selectors.isLogged);

  const passId = () => {
    const idFromLocalStorage = localStorage.getItem('id');
    //console.log('idFromLocalStorage', idFromLocalStorage);
    if (idFromLocalStorage !== null) {
      // console.log('idFromLocalStorage !== null', idFromLocalStorage !== null);
      const idParse = JSON.parse(idFromLocalStorage);
      //  const userId = idParse.slice(1, idParse.length - 1);
      return idParse;
      // console.log('2', userId);
    } else {
      // console.log('3');
    }
  };
  const userId = passId();

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
          <p className={css.category}>{item.category}</p>
          <button
            className={css.icon}
            type="button"
            //onClick={()=>toggleSelected(item._id)}
          >
            <AiOutlineHeart size={28} />
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
            item={notice}
            //    onClick={()=>toggleSelected(item._id)} selected={selected}
          />
        </Modal>
      )}
    </>
  );
};

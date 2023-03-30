import css from './NoticeModal.module.css';
import { ReactComponent as IconHeart } from '../../images/icon_heart.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../redux/auth/selectors';
import { selectFavorites } from '../../redux/notices/selectors';
import {
  getAllSelectedNotices,
} from '../../redux/notices/operations';


export const NoticeModal = ({
  item, categoryName, handleAddOrDeleteFavorite
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isLogged = useSelector(selectors.isLogged);

  useEffect(() => {
    if (!isLogged) {
      return;
    }
    dispatch(getAllSelectedNotices());
    return;
  }, [dispatch, isLogged]);


  return (
    <div className={css.container}>
      <div className={css.cover}>
      <div className={css.img_cover}>
        {categoryName ? <p className={css.category}>{categoryName}</p>
       : <p className={css.category}>{item.category}</p>}
        
        {item.imageURL ? (
          <img src={item.imageURL} className={css.img} alt="Pet" />
        ) : null}
      </div>
      <div>
      <h3 className={css.title}>{item.title}</h3>

      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.main_text}>Name: </p>
          <p className={css.text}> {item.name}</p>
        </li>
        <li className={css.item}>
          <p className={css.main_text}>Birthday: </p>
          <p className={css.text}>{item.birthdate}</p>{' '}
        </li>
        <li className={css.item}>
          <p className={css.main_text}>Breed: </p>
          <p className={css.text}>{item.breed}</p>{' '}
        </li>
        <li className={css.item}>
          <p className={css.main_text}>Location: </p>
          <p className={css.text}>{item.location}</p>{' '}
        </li>
        <li className={css.item}>
          <p className={css.main_text}>The sex: </p>
          <p className={css.text}>{item.sex}</p>{' '}
        </li>
        <li className={css.item}>
          <p className={css.main_text}>Email: </p>
          <a href={'mailto:'+item.email} className={css.text} >{item.email}</a>
        </li>
        <li className={css.item}>
          <p className={css.main_text}>Phone: </p>
          {item.mobilePhone ? (
            <a href={'tel:'+item.mobilePhone}className={css.text}>{item.mobilePhone}</a>
          ) : (
            <p className={css.text}>Not provided</p>
          )}
        </li>

        {item.category === 'sell' && item.price ? (
          <li className={css.item}>
            <p className={css.main_text}>Price:</p>{' '}
            <p className={css.text}>{item.price}$</p>
          </li>
        ) : null}
      </ul>
      </div>
      </div>
      <p className={css.comments}>Comments: {item.comments}</p>

      <ul className={css.btn_list}>
        <li className={css.btn_item}>
          <a className={css.btn_tel} href={`tel:${item.mobilePhone}`}>
            Contact
          </a>
        </li>
 
          <li className={css.btn_item}>
            <button
              className={css.btn}
              type="button"
              onClick={handleAddOrDeleteFavorite}
            >
            {(!favorites.find(favorite => favorite._id === item._id)) ?  
            ("Add to" ) : ( "Remove from" )} 
              <IconHeart width={20} height={20} />
            </button>
          </li>
        
      </ul>
    </div>
  );
};

import css from './NoticeModal.module.css';
import { ReactComponent as IconHeart} from '../../images/icon_heart.svg'


export const NoticeModal = ({
  item,isFavorite, handleDeleteFromFavorite, handleAddToFavorite
}) => {
  console.log(item);
  return (
    <div className={css.container}>
      <div className={css.img}>
        <p className={css.category}>{item.category}</p>
        {item.imageURL ? (<img
        src={item.imageURL}
        className={css.img}
        alt="Pet"
      />) : null}
      </div>
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
          <p className={css.text}>{item.email}</p>{' '}
        </li>
        <li className={css.item}>
          <p className={css.main_text}>Phone: </p>
          {item.mobilePhone ? (
            <p className={css.text}>{item.mobilePhone}</p>
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

      <p className={css.comments}>Comments: {item.comments}</p>

      <ul>
        <li className={css.btn_item}>
          <a className={css.btn} href={`tel:${item.mobilePhone}`}>
            Contact
          </a>
        </li>

        {!isFavorite ? (
        <li className={css.btn_item}>
          <button
            className={css.btn}
            type="button"
          onClick={handleAddToFavorite}
          >
            {' '}
            Add to  <IconHeart width={20} height={20}/> 
          </button>
        </li>
      ) : ( 
        <li className={css.btn_item}>
          <button
            className={css.btn}
            type="button"
              onClick={handleDeleteFromFavorite}
          >
            {' '}
            Remove from  <IconHeart width={20} height={20}/> 
          </button>
        </li>
        )}
      </ul>
    </div>
  );
};

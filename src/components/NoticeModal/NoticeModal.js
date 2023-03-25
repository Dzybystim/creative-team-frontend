import css from './NoticeModal.module.css';


export const NoticeModal = ({ item, 
  //onClick, selected 
}) =>{
  

    return (
      <div className={css.container}>
        <div className={css.img}>
          <p className={css.category}>{item.category}</p>
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
            {item.mobilePhone ? 
              (<p className={css.text}>{item.mobilePhone}</p>)
             : (<p className={css.text}>Not provided</p>)
            }
          </li> 

          {(item.category === 'sell' && item.price) ? (
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

          {/* {!selected ? ( */}
          <li className={css.btn_item}>
            <button
              className={css.btn}
              type="button"
              // onClick={onClick}
            >
              {' '}
              Add to
            </button>
          </li>
          {/* ) : (  */}
          <li className={css.btn_item}>
            <button
              className={css.btn}
              type="button"
              //  onClick={onClick}
            >
              {' '}
              Remove from
            </button>
          </li>
          {/* )}*/}
        </ul>
      </div>
    );
  };

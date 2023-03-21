//import PropTypes from 'prop-types';
import css from './UserData.module.css';

export default function UserData(data) {
  return (
    <>
      <div>
        <div className={css.avatar}>
          <input
            className={css.input}
            type="file"
            id="file"
            accept=".jpg, .jpeg, .png"
            hidden
          ></input>
          <button /*onclick="file.click()"*/>Edit photo</button>
        </div>

        <ul className={css.info}>
          <li className={css.info_data}>
            <p className={css.text}>Name:</p>
            <p className={css.text}> {data.name}</p>
          </li>
          <li className={css.info_data}>
            <p className={css.text}>Email:</p>
            <p className={css.text}>{data.email}</p>
          </li>
          <li className={css.info_data}>
            <p className={css.text}>Birthday:</p>
            <p className={css.text}>{data.birthday}</p>
          </li>
          <li className={css.info_data}>
            <p className={css.text}>Phone:</p>
            <p className={css.text}>{data.phone}</p>
          </li>
          <li className={css.info_data}>
            <p className={css.text}>City:</p>
            <p className={css.text}>{data.city}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

//UserData.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//    email: PropTypes.string.isRequired,
//     phone: PropTypes.number.isRequired,
//     birthday: PropTypes.number.isRequired,
//     city: PropTypes.string.isRequired,
//};

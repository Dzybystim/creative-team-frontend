import { HiPencil } from 'react-icons/hi';
import { BsCheck } from 'react-icons/bs';
import { useState } from 'react';
import { userEdit } from '../../../../utilities/helpers';

import css from './UserDataItem.module.css';

export default function UserDataItem({ user }) {
  const { birthdate, cityRegion, email, mobilePhone, name } = user;

  const [nameField, setChangeNameField] = useState(name);
  const [emailField, setChangeEmailField] = useState(email);
  const [birthdayField, setChangeBirthdayField] = useState(
    birthdate ? birthdate : '00.00.0000'
  );
  const [phoneField, setChangePhoneField] = useState(
    mobilePhone ? mobilePhone : '+38000000000'
  );
  const [cityField, setChangeCityField] = useState(cityRegion);

  const [clickName, setclickName] = useState(false);
  const [clickEmail, setclickEmail] = useState(false);
  const [clickBirthdate, setclickBirthdate] = useState(false);
  const [clickPhone, setclickPhone] = useState(false);
  const [clickCity, setclickCity] = useState(false);

  const handleClick = event => {
    switch (event.currentTarget.name) {
      case 'name':
        clickName ? setclickName(false) : setclickName(true);
        break;
      case 'email':
        clickEmail ? setclickEmail(false) : setclickEmail(true);
        break;
      case 'birthday':
        clickBirthdate ? setclickBirthdate(false) : setclickBirthdate(true);
        break;
      case 'phone':
        clickPhone ? setclickPhone(false) : setclickPhone(true);
        break;
      case 'city':
        clickCity ? setclickCity(false) : setclickCity(true);
        break;
      default:
        console.error('Ошибка в UserDataItem (handleVlick)');
    }
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setChangeNameField(event.target.value);
        break;
      case 'email':
        setChangeEmailField(event.target.value);
        break;
      case 'birthday':
        setChangeBirthdayField(event.target.value);
        break;
      case 'phone':
        setChangePhoneField(event.target.value);
        break;
      case 'city':
        setChangeCityField(event.target.value);
        break;

      default:
        console.error('Ошибка в UserDataItem (handleChange)');
    }
  };

  const clickSubmit = event => {
    handleClick(event);
    console.log(nameField);
    userEdit({
      name: nameField,
      email: emailField,
      birthdate: birthdayField,
      mobilePhone: phoneField,
      cityRegion: cityField,
    });
  };

  return (
    <>
      <table className={css.container_text}>
        <tbody>
          <tr>
            <td>
              <p className={css.text_user}>Name</p>
            </td>
            {clickName === false ? (
              <>
                <td>
                  <p className={css.text_user}>{name}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="name"
                    onClick={handleClick}
                  >
                    <HiPencil className={css.pencil} />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <input
                    type="text"
                    name="name"
                    required
                    value={nameField}
                    onChange={handleChange}
                    className={css.input}
                  ></input>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="name"
                    onClick={clickSubmit}
                  >
                    <BsCheck className={css.check} />
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr>
            <td>
              <p className={css.text_user}>Email</p>
            </td>
            {clickEmail === false ? (
              <>
                <td>
                  <p className={css.text_user}>{email}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="email"
                    onClick={handleClick}
                  >
                    <HiPencil className={css.pencil} />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <input
                    type="text"
                    name="email"
                    required
                    value={emailField}
                    onChange={handleChange}
                    className={css.input}
                  ></input>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="email"
                    onClick={clickSubmit}
                  >
                    <BsCheck className={css.check} />
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr>
            <td>
              <p className={css.text_user}>Birthday</p>
            </td>
            {clickBirthdate === false ? (
              <>
                <td>
                  <p className={css.text_user}>
                    {birthdate ? birthdate : '00.00.0000'}
                  </p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="birthday"
                    onClick={handleClick}
                  >
                    <HiPencil className={css.pencil} />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <input
                    type="text"
                    name="birthday"
                    required
                    value={birthdayField}
                    onChange={handleChange}
                    className={css.input}
                  ></input>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="birthday"
                    onClick={clickSubmit}
                  >
                    <BsCheck className={css.check} />
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr>
            <td>
              <p className={css.text_user}>Phone</p>
            </td>
            {clickPhone === false ? (
              <>
                <td>
                  <p className={css.text_user}>
                    {mobilePhone ? mobilePhone : '+38000000000'}
                  </p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="phone"
                    onClick={handleClick}
                  >
                    <HiPencil className={css.pencil} />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={phoneField}
                    onChange={handleChange}
                    className={css.input}
                  ></input>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="phone"
                    onClick={clickSubmit}
                  >
                    <BsCheck className={css.check} />
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr>
            <td>
              <p className={css.text_user}>City</p>
            </td>
            {clickCity === false ? (
              <>
                <td>
                  <p className={css.text_user}>{cityRegion}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="city"
                    onClick={handleClick}
                  >
                    <HiPencil className={css.pencil} />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <input
                    type="text"
                    name="city"
                    required
                    value={cityField}
                    onChange={handleChange}
                    className={css.input}
                  ></input>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="city"
                    onClick={clickSubmit}
                  >
                    <BsCheck className={css.check} />
                  </button>
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
}

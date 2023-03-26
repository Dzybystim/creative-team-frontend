import { HiPencil } from 'react-icons/hi';
import { BsCheck } from 'react-icons/bs';
import { useState } from 'react';
import { userEdit } from '../../../../utilities/helpers';

import css from './UserDataItem.module.css';

export default function UserDataItem({ user }) {
  const { birthdate, cityRegion, email, mobilePhone, name } = user;

  // Стейти полів інпутів

  const [nameField, setChangeNameField] = useState(name);
  const [emailField, setChangeEmailField] = useState(email);
  const [birthdayField, setChangeBirthdayField] = useState(
    birthdate ? birthdate : '01.01.2000'
  );
  const [phoneField, setChangePhoneField] = useState(
    mobilePhone ? mobilePhone : '+38000000000'
  );

  const [cityField, setChangeCityField] = useState(cityRegion);
  // Стейти кліків на кнопки для зміни
  const [clickName, setclickName] = useState(false);
  const [clickEmail, setclickEmail] = useState(false);
  const [clickBirthdate, setclickBirthdate] = useState(false);
  const [clickPhone, setclickPhone] = useState(false);
  const [clickCity, setclickCity] = useState(false);
  // Стейт для блокування інших кнопок для змін
  const [pencilButtonActivity, setPencilButtonActivity] = useState(false);

  const handleClick = event => {
    event.preventDefault();

    switch (event.currentTarget.name[0].name || event.currentTarget.name) {
      case 'name':
        setPencilButtonActivity(true);
        clickName ? setclickName(false) : setclickName(true);
        break;
      case 'email':
        setPencilButtonActivity(true);
        clickEmail ? setclickEmail(false) : setclickEmail(true);
        break;
      case 'birthday':
        setPencilButtonActivity(true);
        clickBirthdate ? setclickBirthdate(false) : setclickBirthdate(true);
        break;
      case 'phone':
        setPencilButtonActivity(true);
        clickPhone ? setclickPhone(false) : setclickPhone(true);
        break;
      case 'city':
        setPencilButtonActivity(true);
        clickCity ? setclickCity(false) : setclickCity(true);
        break;
      default:
        console.error('Ошибка в UserDataItem (handleVlick)');
    }
  };

  const handleChange = event => {
    event.preventDefault();
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
    event.preventDefault();
    handleClick(event);

    setPencilButtonActivity(false);

    if (nameField !== name) {
      userEdit({ name: nameField });
      userEdit({ email: emailField });
      userEdit({ mobilePhone: phoneField });
      userEdit({ cityRegion: cityField });
      userEdit({ birthdate: birthdayField });
    } else if (emailField !== email) {
      userEdit({ name: nameField });
      userEdit({ email: emailField });
      userEdit({ mobilePhone: phoneField });
      userEdit({ cityRegion: cityField });
      userEdit({ birthdate: birthdayField });
    } else if (phoneField !== mobilePhone) {
      userEdit({ name: nameField });
      userEdit({ email: emailField });
      userEdit({ mobilePhone: phoneField });
      userEdit({ cityRegion: cityField });
      userEdit({ birthdate: birthdayField });
    } else if (cityField !== cityRegion) {
      userEdit({ name: nameField });
      userEdit({ email: emailField });
      userEdit({ mobilePhone: phoneField });
      userEdit({ cityRegion: cityField });
      userEdit({ birthdate: birthdayField });
    } else if (birthdayField !== birthdate) {
      userEdit({ name: nameField });
      userEdit({ email: emailField });
      userEdit({ mobilePhone: phoneField });
      userEdit({ cityRegion: cityField });
      userEdit({ birthdate: birthdayField });
    } else {
      return;
    }
  };

  return (
    <>
      <table className={css.container_text}>
        <tbody>
          <tr>
            <td>
              <p className={css.text_user}>Name:</p>
            </td>
            {clickName === false ? (
              <>
                <td>
                  <p className={css.text_user}>{nameField}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="name"
                    onClick={handleClick}
                    disabled={pencilButtonActivity === false ? false : true}
                  >
                    <HiPencil
                      className={
                        pencilButtonActivity === false
                          ? css.pencil
                          : css.pencil_disabled
                      }
                    />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <form id="sub_name" name="name" onSubmit={clickSubmit}>
                    <input
                      type="text"
                      name="name"
                      required
                      pattern="^[a-zA-Z]+$"
                      value={nameField}
                      onChange={handleChange}
                      className={css.input}
                    ></input>
                  </form>
                </td>
                <td>
                  <button
                    type="submit"
                    form="sub_name"
                    className={css.button_pencil}
                    name="name"
                  >
                    <BsCheck className={css.check} />
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr>
            <td>
              <p className={css.text_user}>Email:</p>
            </td>
            {clickEmail === false ? (
              <>
                <td>
                  <p className={css.text_user}>{emailField}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="email"
                    onClick={handleClick}
                    disabled={pencilButtonActivity === false ? false : true}
                  >
                    <HiPencil
                      className={
                        pencilButtonActivity === false
                          ? css.pencil
                          : css.pencil_disabled
                      }
                    />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <form id="sub_email" name="email" onSubmit={clickSubmit}>
                    <input
                      type="email"
                      name="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      value={emailField}
                      onChange={handleChange}
                      className={css.input}
                    ></input>
                  </form>
                </td>
                <td>
                  <button
                    type="submit"
                    className={css.button_pencil}
                    name="email"
                    form="sub_email"
                  >
                    <BsCheck className={css.check} />
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr>
            <td>
              <p className={css.text_user}>Birthday:</p>
            </td>
            {clickBirthdate === false ? (
              <>
                <td>
                  <p className={css.text_user}>
                    {birthdayField ? birthdayField : '01.01.2000'}
                  </p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="birthday"
                    onClick={handleClick}
                    disabled={pencilButtonActivity === false ? false : true}
                  >
                    <HiPencil
                      className={
                        pencilButtonActivity === false
                          ? css.pencil
                          : css.pencil_disabled
                      }
                    />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <form id="sub_birt" name="birthday" onSubmit={clickSubmit}>
                    <input
                      type="text"
                      name="birthday"
                      required
                      pattern="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}"
                      value={birthdayField}
                      onChange={handleChange}
                      className={css.input}
                    ></input>
                  </form>
                </td>
                <td>
                  <button
                    type="submit"
                    className={css.button_pencil}
                    name="birthday"
                    form="sub_birt"
                  >
                    <BsCheck className={css.check} />
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr>
            <td>
              <p className={css.text_user}>Phone:</p>
            </td>
            {clickPhone === false ? (
              <>
                <td>
                  <p className={css.text_user}>
                    {phoneField ? phoneField : '+38000000000'}
                  </p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="phone"
                    onClick={handleClick}
                    disabled={pencilButtonActivity === false ? false : true}
                  >
                    <HiPencil
                      className={
                        pencilButtonActivity === false
                          ? css.pencil
                          : css.pencil_disabled
                      }
                    />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <form id="sub_phone" name="phone" onSubmit={clickSubmit}>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="\+?[0-9\s\-\(\)]+"
                      value={phoneField}
                      onChange={handleChange}
                      className={css.input}
                    ></input>
                  </form>
                </td>
                <td>
                  <button
                    type="submit"
                    className={css.button_pencil}
                    name="phone"
                    form="sub_phone"
                  >
                    <BsCheck className={css.check} />
                  </button>
                </td>
              </>
            )}
          </tr>
          <tr>
            <td>
              <p className={css.text_user}>City:</p>
            </td>
            {clickCity === false ? (
              <>
                <td>
                  <p className={css.text_user}>{cityField}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className={css.button_pencil}
                    name="city"
                    onClick={handleClick}
                    disabled={pencilButtonActivity === false ? false : true}
                  >
                    <HiPencil
                      className={
                        pencilButtonActivity === false
                          ? css.pencil
                          : css.pencil_disabled
                      }
                    />
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <form id="sub_city" name="city" onSubmit={clickSubmit}>
                    <input
                      type="text"
                      name="city"
                      required
                      pattern="^[a-zA-Z]+$"
                      value={cityField}
                      onChange={handleChange}
                      className={css.input}
                    ></input>
                  </form>
                </td>
                <td>
                  <button
                    type="submit"
                    className={css.button_pencil}
                    name="city"
                    form="sub_city"
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

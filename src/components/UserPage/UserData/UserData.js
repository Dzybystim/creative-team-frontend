import css from './UserData.module.css';
import axios from 'axios';
//const API_KEY = '?api_key=0fe38363eb34760457702cbb346d2d7a';

import { useParams } from 'react-router-dom';
//import { getUserDataById } from 'service/API';
//import { Suspense } from "react";
import { useState, useEffect } from 'react';
//import { Outlet} from "react-router-dom";
import Notiflix from 'notiflix';
const BASE_URL = 'https://backend.petly.club';

//import NoImage from 'images/noImag.png';

export const getUserDataById = noticeId =>
  axios.get(`${BASE_URL}userData/${noticeId}`);

export default function UserData() {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserDataById(id)
      .then(({ data }) => setUserData(data))
      .catch(error =>
        Notiflix.Notify.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [id]);

  const { name, email, birthday, phone, city } = userData;

  return (
    <>
      <div>
        <img src="" alt={name} width={'300px'} />
        <div class={css.userinfo}>
          <ul className={css.info}>
            <li className={css.info_data}>
              <p className={css.text}>Name:</p>
              <p className={css.text}> {name}</p>
            </li>
            <li className={css.info_data}>
              <p className={css.text}>Email:</p>
              <p className={css.text}>{email}</p>
            </li>
            <li className={css.info_data}>
              <p className={css.text}>Birthday:</p>
              <p className={css.text}>{birthday}</p>
            </li>
            <li className={css.info_data}>
              <p className={css.text}>Phone:</p>
              <p className={css.text}>{phone}</p>
            </li>
            <li className={css.info_data}>
              <p className={css.text}>City:</p>
              <p className={css.text}>{city}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

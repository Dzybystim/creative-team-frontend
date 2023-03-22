import PetsData from 'components/UserPage/PetsData/PetsData';
import UserData from 'components/UserPage/UserData/UserData';
import Logout from 'components/UserPage/UserData/LogOut/LogOut'
import NotFound from '../utilities/NotFound/NotFound.jsx'
import css from './UserPage.module.css';
import { useState, useEffect } from "react";
import {fetchUserAndPets} from '../utilities/helpers'
import {selectors} from '../redux/auth/selectors'
import { useSelector } from 'react-redux';

export default function UserPage() {
  const [userAndPets, setUserAndPets] = useState([]);

  const isLoggedIn = useSelector(selectors.isLogged)
  const token = useSelector(selectors.getToken)


  console.log(token)

  useEffect(() => {
    fetchUserAndPets(token)
    .then(setUserAndPets)
    .catch(error => console.log(error.message))
  }, [token])

  console.log(userAndPets)

  return (<>
    {isLoggedIn ?  
    <div className={css.container}>
    <h2 className={css.title}>My information:</h2>
    <div className={css.container__userdata}>
      <UserData />
      <Logout />
    </div>

    <h2 className={css.title}>My pets:</h2>

    <div className={css.container__petsdata}>
      <PetsData />
    </div>
    Готово
  </div>
: <NotFound/> }
    </>
  );
}

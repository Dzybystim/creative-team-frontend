import PetsData from 'components/UserPage/PetsData/PetsData';
import UserData from 'components/UserPage/UserData/UserData';
import Logout from 'components/UserPage/UserData/LogOut/LogOut';
import UserFoto from 'components/UserPage/UserData/UserFoto/UserFoto.jsx';
import EditFoto from 'components/UserPage/UserData/EditFoto/EditFoto.jsx';
import css from './UserPage.module.css';
import { useState, useEffect } from 'react';
import { fetchUserAndPets } from '../utilities/helpers';
import { selectors } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutMutation } from 'redux/auth/fetchUser';

export default function UserPage() {
  const [userAndPets, setUserAndPets] = useState({});
  const [userFoto, setUserFoto] = useState(null);
  const [addPet, setAddPet] = useState(false);
  const [LogOut] = useLogOutMutation();

  const token = useSelector(selectors.getToken);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUserAndPets(token);
      setUserAndPets(response);
      return;
    };
    fetchData().catch(console.error);
  }, [token, addPet]);

  if (userAndPets === undefined) {
    LogOut();
    return navigate('/login');
  }
  return (
    <div className={css.container}>
      {userAndPets.user && (
        <>
          <div className={css.container__userdata}>
            <h2 className={css.title}>My information:</h2>
            <div className={css.container_desktop}>
              <div className={css.container_tablet}>
                <UserFoto userFoto={userFoto} user={userAndPets.user} />
                <EditFoto setUserFoto={setUserFoto} />
              </div>
              <div className={css.container_tablet_tab}>
                <UserData user={userAndPets.user} />
                <Logout />
              </div>
            </div>
          </div>
        </>
      )}

      {userAndPets.pets && (
        <div className={css.container_pets}>
          <div className={css.container__petsdata}>
            <PetsData
              pets={userAndPets.pets}
              setAddPet={setAddPet}
              addPet={addPet}
            />
          </div>
        </div>
      )}
    </div>
  );
}

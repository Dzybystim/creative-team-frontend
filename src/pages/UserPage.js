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
import { Dna } from 'react-loader-spinner';

export default function UserPage() {
  const [loading, setLoading] = useState(false);
  const [userAndPets, setUserAndPets] = useState([]);

  const token = useSelector(selectors.getToken);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetchUserAndPets(token);
      setUserAndPets(response);
      return;
    };
    fetchData()
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token]);

  const { pets, user } = userAndPets;

  return (
    <>
      {loading ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <div className={css.container}>
          {user && (
            <>
              <h2 className={css.title}>My information:</h2>
              <div className={css.container__userdata}>
                <UserFoto user={user} />
                <EditFoto />
                <UserData user={user} />
                <Logout />
              </div>
            </>
          )}

          <h2 className={css.title}>My pets:</h2>
          {pets && (
            <>
              <h2 className={css.title}>My pets:</h2>
              <div className={css.container__petsdata}>
                <PetsData pets={pets} />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

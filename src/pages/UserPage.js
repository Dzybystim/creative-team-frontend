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
  const [userFoto, setUserFoto] = useState(null);

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
      <div className={css.container}>
        {user && (
          <>
            <h2 className={css.title}>My information:</h2>
            <div className={css.container__userdata}>
              <UserFoto userFoto={userFoto} user={user} />
              <EditFoto setUserFoto={setUserFoto} />
              <UserData user={user} />
              <Logout />
            </div>
          </>
        )}

        {/* <h2 className={css.title}>My pets:</h2> */}
        {pets && (
          <>
            <h2 className={css.title}>My pets:</h2>

            {/* <Button
                aria-label="add pet"
                onClick={onOpen}
                rightIcon={
                  <BsFillPlusCircleFill size="40px" fill="#F59256" m="0px" />
                }
                bg="transparent"
                fontSize={{ base: '20px', md: '28px' }}
                color="black"
                lineHeight={{ base: '1.35' }}
                fontWeight={{ base: '500' }}
                type="button"
                px="0px"
                _hover={{ color: 'accent.accentOrange' }}
                transitionProperty={'color'}
                transitionDuration={'250ms'}
                transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
              >
                <Text mr="7px">Add pet</Text>
              </Button> */}

            <div className={css.container__petsdata}>
              <PetsData pets={pets} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

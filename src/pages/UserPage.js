import PetsData from 'components/UserPage/PetsData/PetsData';
import UserData from 'components/UserPage/UserData/UserData';
import css from './UserPage.module.css';

export default function UserPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>My information:</h2>
      <div className={css.container__userdata}>
        <UserData />
      </div>

      <h2 className={css.title}>My pets:</h2>

      <div className={css.container__petsdata}>
        <PetsData />
      </div>
    </div>
  );
}

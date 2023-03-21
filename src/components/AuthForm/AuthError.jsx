import { Link } from 'react-router-dom';
import css from './AuthForm.module.css';

export const AuthError = ({ error, additionalInfo }) => {
  return (
    <div className={css.container}>
      <div className={css.form}>
        <h2 className={css.title}>{error}</h2>

        <p className={css.redirect__auth}>{additionalInfo}</p>
        <p className={css.redirect__auth}>
          {'Already have an account?'}
          <Link to="/login" className={css.redirect_link__auth}>
            {' Login'}
          </Link>
        </p>
      </div>
    </div>
  );
};

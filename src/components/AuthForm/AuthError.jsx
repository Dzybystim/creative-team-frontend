import css from './AuthForm.module.css';

export const AuthError = ({ error, additionalInfo }) => {
  return (
    <div className={css.container}>
      <div className={css.form}>
        <h2 className={css.title}>{error}</h2>

        <p className={css.redirect__auth}>
          {additionalInfo}
          {/* <a className={css.redirect_link__auth} href="/login">
					Login
				</a> */}
        </p>
      </div>
    </div>
  );
};

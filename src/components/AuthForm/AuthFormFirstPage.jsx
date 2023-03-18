import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ErrorMessage, Form, Formik } from 'formik';
import { InputForm } from 'components/Input';
import scss from './AuthForm.module.scss';
import Button from 'components/Button';
import { user } from 'services';

export const AuthFormFirstPage = props => {
  const { t } = useTranslation();
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);

  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const togglePasswordConfirm = () =>
    setPasswordConfirm(prevState => !prevState);
  const handleSubmit = values => {
    props.next(values, true);
  };

  return (
    <div className={scss.container}>
      <Formik
        validationSchema={user.stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={scss.form}>
            <h2 className={scss.title}>{props.title}</h2>
            <div className={scss.input__wrapper}>
              <InputForm
                autofocus="autofocus"
                name="email"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="p" className={scss.error} />
            </div>
            <div className={scss.input__wrapper}>
              <InputForm
                name="password"
                type={passwordShow ? 'text' : 'password'}
                placeholder="Password"
              />
              <span
                id="visibilityBtn"
                className={scss.IconPassword}
                onClick={togglePassword}
              >
                {passwordShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
              <ErrorMessage
                name="password"
                component="p"
                className={scss.error__password}
              />
            </div>
            <div className={scss.input__wrapper_last}>
              <InputForm
                name="confirmPassword"
                type={passwordConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
              />
              <span
                id="visibilityBtn"
                className={scss.IconPassword}
                onClick={togglePasswordConfirm}
              >
                {passwordConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className={scss.error__password}
              />
            </div>
            <div className={scss.button__container}>
              <Button
                type="submit"
                className={scss.button__auth}
                buttonName={t('Next')}
              ></Button>
            </div>
            <p className={scss.redirect__auth}>
              {t('Already have an account?')}
              <Link to="/login" className={scss.redirect_link__auth}>
                {t('Login')}
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

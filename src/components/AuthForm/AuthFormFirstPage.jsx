import { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ErrorMessage, Form, Formik } from 'formik';
import css from './AuthForm.module.css';
import { InputForm } from 'components/Input/Input';
import Button from 'components/Button/Button';
import { user } from 'service';

export const AuthFormFirstPage = props => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);

  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const togglePasswordConfirm = () =>
    setPasswordConfirm(prevState => !prevState);
  const handleSubmit = values => {
    props.next(values, true);
  };

  return (
    <div className={css.containers}>
      <Formik
        validationSchema={user.stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.form}>
            <h2 className={css.title}>{props.title}</h2>
            <div className={css.input__wrapper}>
              <InputForm
                autofocus="autofocus"
                name="email"
                type="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="p" className={css.error} />
            </div>
            <div className={css.input__wrapper}>
              <InputForm
                name="password"
                type={passwordShow ? 'text' : 'password'}
                placeholder="Password"
              />
              <span
                id="visibilityBtn"
                className={css.IconPassword}
                onClick={togglePassword}
              >
                {passwordShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
              <ErrorMessage
                name="password"
                component="p"
                className={css.error__password}
              />
            </div>
            <div className={css.input__wrapper_last}>
              <InputForm
                name="confirmPassword"
                type={passwordConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
              />
              <span
                id="visibilityBtn"
                className={css.IconPassword}
                onClick={togglePasswordConfirm}
              >
                {passwordConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className={css.error__password}
              />
            </div>
            <div className={css.button__container}>
              <Button
                type="submit"
                className={css.button__auth}
                buttonName={'Next'}
              ></Button>
            </div>
            <p className={css.redirect__auth}>
              {'Already have an account?'}
              <Link to="/login" className={css.redirect_link__auth}>
                {' Login'}
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

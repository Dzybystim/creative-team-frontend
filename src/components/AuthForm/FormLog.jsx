import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import css from './AuthForm.module.css';
import { useLogInMutation } from 'redux/auth/fetchUser';
import { InputForm } from 'components/Input/Input';
import { user } from 'service';
import Button from 'components/Button/Button';
import { Dna } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/auth/selectors';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = props => {
  const [login] = useLogInMutation();
  const [isError, setIsError] = useState(null);
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();
  const getLoad = useSelector(selectors.isLoadUser);

  const togglePassword = () => setPasswordShow(prevState => !prevState);

  const handleSubmit = async (formData, { resetForm }) => {
    const { error } = await login(formData);
    if (error) {
      setIsError({
        message: error.data.message,
        additionalInfo: error.data.additionalInfo,
      });
      resetForm();
      return;
    } else {
      navigate('/user');
    }
  };

  return (
    <div className={css.containers}>
      <div className={css.container_DNA}>
        {getLoad && (
          <Dna
            visible={true}
            height="150"
            width="150"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
          />
        )}
      </div>
      <Formik
        validationSchema={user.loginValidationSchema}
        initialValues={initialValues}
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
                autoComplete="off"
              />
              <ErrorMessage name="email" component="p" className={css.error} />
            </div>
            <div className={css.input__wrapper_last}>
              <InputForm
                name="password"
                type={passwordShow ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="on"
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

            <div className={css.button__container}>
              <Button
                type="submit"
                className={css.button__auth}
                buttonName={'Login'}
              ></Button>
            </div>

            {isError && <p className={css.error__login}>{isError.message}</p>}
            {isError && (
              <p className={css.error__login}>{isError.additionalInfo}</p>
            )}
            <p className={css.redirect__auth}>
              {'No account?'}
              <Link to="/signup" className={css.redirect_link__auth}>
                {' Register'}
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

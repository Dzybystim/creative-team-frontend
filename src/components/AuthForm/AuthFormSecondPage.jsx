import { Link } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import css from './AuthForm.module.css';
import cssButton from '../Button/Button.module.css';
import { InputForm } from 'components/Input/Input';
import Button from 'components/Button/Button';
import { user } from 'service';
import { selectors } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Dna } from 'react-loader-spinner';

export const AuthFormSecondPage = props => {
  const getLoad = useSelector(selectors.isLoadUser);
  const handleSubmit = values => {
    props.next(values, true);
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
        validationSchema={user.stepTwoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className={css.form}>
            <h2 className={css.title}>{props.title}</h2>
            <div className={css.input__wrapper}>
              <InputForm
                autofocus="autofocus"
                name="name"
                type="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="p" className={css.error} />
            </div>
            <div className={css.input__wrapper}>
              <InputForm
                placeholder="City, region"
                name="cityRegion"
                type="cityRegion"
              />
              <ErrorMessage
                name="cityRegion"
                component="p"
                className={css.error}
              />
            </div>
            <div className={css.input__wrapper_last}>
              <InputForm
                name="mobilePhone"
                type="mobilePhone"
                placeholder="Mobile phone"
              />
              <ErrorMessage
                name="mobilePhone"
                component="p"
                className={css.error}
              />
            </div>
            <div className={css.button__container}>
              <Button
                type="submit"
                customStyle={cssButton.button__auth_first}
                buttonName={'Register'}
                disabled={props.isLoading}
              />
              <Button
                onClick={() => props.prev(values)}
                customStyle={cssButton.button__auth_last}
                buttonName={'Back'}
              />
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

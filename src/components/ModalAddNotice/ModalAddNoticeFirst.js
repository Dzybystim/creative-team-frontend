import { ErrorMessage, Field } from 'formik';
import css from './ModalAddNotice.module.css';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import moment from 'moment/moment';

const schemaPageOne = yup.object().shape({
  category: yup
    .string()
    .oneOf(
      ['lost-found', 'for-free', 'sell'],
      'Be sure to choose 1 of the 3 categories!'
    )
    .required('Be sure to choose 1 of the 3 categories!'),
  title: yup
    .string()
    .min(2, 'Minimum 2 characters!')
    .max(48, 'Maximum 48 characters!')
    .required('Required field!'),
  name: yup
    .string()
    .min(2, 'Minimum 2 characters!')
    .max(16, 'Maximum 16 characters!')
    .required('Required field!'),
  birthdate: yup
    .date()
    .min(moment('06021995', 'DDMMYYYY'), 'Must be at later than 06.02.1995')
    .max(
      moment(),
      `Must be at earlier than ${moment().add(1, 'days').format('DD.MM.YYYY')}`
    )
    .required('Date is required'),
  breed: yup
    .string()
    .min(2, 'Minimum 2 characters!')
    .max(24, 'Maximum 24 characters!')
    .required('Required field!'),
});

export const PageOne = props => {
  const handleSubmit = values => {
    props.next(values);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Add pet</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={props.data}
        validationSchema={schemaPageOne}
      >
        <Form autoComplete="off">
          <p className={css.text}>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur{' '}
          </p>

          <div className={css.radio_category}>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="category"
                value="lost-found"
              />
              lost/found
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="category"
                value="for-free"
              />
              in good hands
            </label>
            <label className={css.radio_label}>
              <Field
                className={css.radio_btn}
                type="radio"
                name="category"
                value="sell"
              />
              sell
            </label>
            <ErrorMessage
              name="category"
              component="div"
              className={css.error_msg}
            />
          </div>

          <label htmlFor="title" className={css.label}>
            Tittle of ad
            <Field
              className={css.field}
              id="title"
              type="text"
              name="title"
              placeholder="Type name pet"
              required
            />
            <ErrorMessage
              name="title"
              component="div"
              className={css.error_msg}
            />
          </label>

          <label htmlFor="name" className={css.label}>
            Name pet
            <Field
              className={css.field}
              id="name"
              type="text"
              name="name"
              placeholder="Type name pet"
              required
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.error_msg}
            />
          </label>

          <label className={css.label} htmlFor="birthdate">
            Date of birth
            <Field
              className={css.field}
              id="birthdate"
              type="text"
              name="birthdate"
              placeholder="DD.MM.YYYY"
              required
            />
            <ErrorMessage
              name="birthdate"
              component="div"
              className={css.error_msg}
            />
          </label>

          <label className={css.label} htmlFor="breed">
            Breed
            <Field
              className={css.field_last}
              id="breed"
              type="text"
              name="breed"
              placeholder="Type breed"
              required
            />
            <ErrorMessage
              name="breed"
              component="div"
              className={css.error_msg}
            />
          </label>

          <div className={css.btn_list}>
            <button type="submit" className={`${css.btn} ${css.accent_btn}`}>
              Next
            </button>
            <button type="button" onClick={props.onClose} className={css.btn}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

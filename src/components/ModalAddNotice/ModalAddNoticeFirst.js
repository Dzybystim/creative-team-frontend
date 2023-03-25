import { ErrorMessage, Field } from 'formik';
import css from './ModalAddNotice.module.css';
import * as yup from 'yup';
import { Formik, Form } from 'formik';

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
    .string()
    //.matches(/^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$/, 'Only numbers and dots.')
    .max(new Date(), 'Date must be in the past.')
    .required('Required field!'),
  breed: yup
    .string()
    .min(2, 'Minimum 2 characters!')
    .max(24, 'Maximum 24 characters!')
    .required('Required field!'),
});

export const PageOne = props => {
  const handleSubmit = values => {
    console.log('values first', values);
    props.next(values);
    console.log('values ', values);
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
          </div>
          <ErrorMessage name="category" component="div" />
          <label htmlFor="title" className={css.label}>
            Tittle of ad
          </label>
          <Field
            className={css.field}
            id="title"
            type="text"
            name="title"
            placeholder="Type name pet"
            required
          />
          <ErrorMessage name="title" component="div" />
          <label htmlFor="name" className={css.label}>
            Name pet
          </label>
          <Field
            className={css.field}
            id="name"
            type="text"
            name="name"
            placeholder="Type name pet"
            required
          />
          <ErrorMessage name="name" component="div" />

          <label className={css.label} htmlFor="birthdate">
            Date of birth
          </label>
          <Field
            className={css.field}
            id="birthdate"
            type="text"
            name="birthdate"
            placeholder="Type date of birth"
            //   pattern="^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)[0-9]{2}$"
            required
          />
          <label className={css.label} htmlFor="breed">
            Breed
          </label>
          <Field
            className={css.field_last}
            id="breed"
            type="text"
            name="breed"
            placeholder="Type breed"
            required
          />
          <ErrorMessage name="breed" component="div" />
          <ul>
            <li className={css.btn_item}>
              {' '}
              <button type="submit" className={css.btn}>
                Next
              </button>
            </li>
            <li className={css.btn_item}>
              <button type="button" onClick={props.onClose} className={css.btn}>
                Cancel
              </button>
            </li>
          </ul>
        </Form>
      </Formik>
    </div>
  );
};

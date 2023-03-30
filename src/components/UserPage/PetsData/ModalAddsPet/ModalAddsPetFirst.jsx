import { ErrorMessage, Field, Formik, Form } from 'formik';
import css from './ModalAddsPet.module.css';
import * as yup from 'yup';
import moment from 'moment/moment';

const addPetSchemaFirst = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ\s\-']+$/, 'Can only contain letters')
    .required('Required'),
  date: yup
    .date()
    .min(moment('06021995', 'DDMMYYYY'), 'Must be at later than 06.02.1995')
    .max(
      moment(),
      `Must be at earlier than ${moment().add(1, 'days').format('DD.MM.YYYY')}`
    )
    .required('Required'),
  breed: yup.string().required('Required').default('Dog'),
});

export const FirstPage = ({ data, next, onClose }) => {
  const handleSubmit = values => {
    next({ ...values });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Add pet</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={data}
        validationSchema={addPetSchemaFirst}
      >
        <Form autoComplete="off">
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

          <label className={css.label} htmlFor="date">
            Date of birth
            <Field
              className={css.field}
              id="date"
              type="date"
              name="date"
              placeholder="DD.MM.YYYY"
              required
            />
            <ErrorMessage
              name="date"
              component="div"
              className={css.error_msg}
            />
          </label>

          <label className={`${css.label} ${css.label_last}`} htmlFor="breed">
            Breed
            <Field
              className={css.field}
              id="breed"
              type="text"
              name="breed"
              component="select"
              placeholder="Type breed"
              required
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Hamster">Hamster</option>
              <option value="Parrot">Parrot</option>
              <option value="Guinea pig">Guinea pig</option>
              <option value="Wookiee">Wookiee</option>
              <option value="Ewoks">Ewoks</option>
              <option value="The Dark Lord">The Dark Lord</option>
              <option value="Grud">Grud</option>
              <option value="Other">Other</option>
            </Field>
            <ErrorMessage
              name="breed"
              component="div"
              className={css.error_msg}
            />
          </label>

          <div className={css.btn_list}>
            <button
              type="submit"
              className={`${css.btn} ${css.accent_btn}`}
              aria-label="next"
            >
              Next
            </button>
            <button
              type="button"
              onClick={onClose}
              className={css.btn}
              aria-label="cancel"
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

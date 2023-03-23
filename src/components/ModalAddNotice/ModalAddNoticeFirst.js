import { ErrorMessage, Field } from 'formik';
//import { useState } from 'react';
import css from './ModalAddNotice.module.css';

export const ModalAddNoticeFirst = ({ toggleModalPage, onClose }) => {
  //   const [checked, useChecked] = useState('');

  //   const onCheck = (e)=>{
  // console.log("e", e);
  //   }

  // let radios = document.querySelectorAll('input[type=radio][name="category"]');
  // radios.forEach(radio => radio.addEventListener('change', () => {console.log(radio.value)

  // }));

  return (
    <>
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
      <ErrorMessage name="tittle" component="div" />
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
      {/* <FormError name="name" component="div" /> */}
      <label className={css.label} htmlFor="birthdate">
        Date of birth
      </label>
      <Field
        className={css.field}
        id="birthdate"
        type="text"
        name="birthdate"
        placeholder="Type date of birth"
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
      {/* <FormError name="number" component="div" /> */}
      <ul>
        <li className={css.btn_item}>
          {' '}
          <button type="submit" onClick={toggleModalPage} className={css.btn}>
            Next
          </button>
        </li>
        <li className={css.btn_item}>
          <button type="submit" onClick={onClose} className={css.btn}>
            Cancel
          </button>
        </li>
      </ul>
    </>
  );
};

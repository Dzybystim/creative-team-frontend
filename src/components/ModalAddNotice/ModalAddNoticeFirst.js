import {  ErrorMessage, Field } from 'formik';
import css from "./ModalAddNotice.module.css";

export const ModalAddNoticeFirst = ({toggleModalPage, onClose}) => {

    return (

<>
<p className={css.text}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>

<div className={css.radio_category}>
<label className={css.radio_label}>
              <Field className={css.radio_btn} type="radio" name="category" value="lost-found" />
              lost/found
            </label>
            <label className={css.radio_label}>
              <Field className={css.radio_btn} type="radio" name="category" value="for-free" />
              in good hands
            </label>
            <label className={css.radio_label}>
              <Field className={css.radio_btn} type="radio" name="category" value="sell" />
              sell
            </label>
</div>

<label htmlFor="tittle" className={css.label}>Tittle of ad</label>
<Field className={css.field}
                  id="tittle"
              type="text"
              name="tittle"
              placeholder="Type name pet"
              required
            />
            <ErrorMessage name="tittle" component="div" />
<label htmlFor="name" className={css.label}>Name pet</label>
<Field className={css.field}
                  id="name"
              type="text"
              name="name"
              placeholder="Type name pet"
              required
            />
            <ErrorMessage name="name" component="div" />
            {/* <FormError name="name" component="div" /> */}
            <label className={css.label} htmlFor="birthday">Date of birth</label>
            <Field
            className={css.field}
            id="birthday"
            type="text"
              name="birthday"
              placeholder="Type date of birth"
              required
            />
            <label className={css.label} htmlFor="breed">Breed</label>
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
              <li className={css.btn_item}> <button type="submit" onClick={toggleModalPage}  className={css.btn}>Next</button>
           </li>
              <li className={css.btn_item}><button type="submit" onClick={onClose}  className={css.btn}>Cancel</button>
            </li>
            </ul>
            
</>

    )
}

import { ErrorMessage, Field } from 'formik';
import {ReactComponent as Male } from "../../images/Male.svg";
import {ReactComponent as Female } from "../../images/Female.svg";
import css from "./ModalAddNotice.module.css";
import { useState } from 'react';

export const ModalAddNoticeSecond = ({toggleModalPage, onSubmit}) => {
const [fieldValue, setFieldValue] = useState();
console.log("fieldValue", fieldValue);
    return (
        
        <>
 <label  className={css.label}> The sex:  </label>
<div className={css.radio_sex}>

        <label className={css.radio_label_sex}> 
                        <span className={css.radio_icon}><Male/>  </span>
            <Field className={css.radio_btn} type="radio" name="sex" value="lost-found" />
                <span className={css.radio_icon_text}>Male</span>
        </label>
        <label className={css.radio_label_sex}>
                        <span className={css.radio_icon}><Female/>  </span>
            <Field className={css.radio_btn} type="radio" name="sex" value="for-free" />
                <span className={css.radio_icon_text}>Female</span> 
        </label>
            
</div>



<label htmlFor="location" className={css.label}>Location:</label>
<Field className={css.field_second}
                  id="location"
              type="text"
              name="location"
              placeholder="Brovary, Kyiv or Akhtyrka, Sumy"
              required
            />
            <ErrorMessage name="location" component="div" />

<label htmlFor="price" className={css.label}>Price:</label>
<Field className={css.field_second}
                  id="price"
              type="text"
              name="price"
              placeholder="00$"
              required
            />
            <ErrorMessage name="price" component="div" />

<label htmlFor="file" className={css.label}>Load the pet’s image</label>
<label htmlFor="file" className={css.field_photo}>
<Field className={css.radio_btn}
                  id="file"
              type="file"
              name="file"
            //   onChange={(event) => {
            //     if (event.currentTarget.files) {
            //         setFieldValue(
            //             "file",
            //              event.currentTarget.files[0]
            //          );
            //     }}}
              required
            /></label>
            <ErrorMessage name="file" component="div" />

<label htmlFor="comments" className={css.label}>Comments</label>
<Field className={css.field_last}
                  id="comments"
              type="text"
              name="comments"
              placeholder="Some comments"
              required
            />
            <ErrorMessage name="comments" component="div" />





<ul>
        <li className={css.btn_item}>
    <button type="submit" onSubmit={onSubmit} className={css.btn}>Done</button>
        </li>
        <li className={css.btn_item}>
    <button onClick={toggleModalPage} type="submit" className={css.btn}>Back</button>
        </li>
</ul>

        </>
        
            )

}

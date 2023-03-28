import { Formik, Form, ErrorMessage, Field } from 'formik';
import { ReactComponent as Male } from '../../images/Male.svg';
import { ReactComponent as Female } from '../../images/Female.svg';
import css from './ModalAddNotice.module.css';
import { useState } from 'react';
import { postImageToStorage } from '../../utilities/helpers';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schemaPageTwo = yup.object().shape({
  sex: yup.mixed().oneOf(['male', 'female']).required('Required field!'),
  location: yup
    .string()
    .min(5, 'Minimum 5 characters!')
    .max(60, 'Maximum 60 characters!')
    .required('Required field!'),
  comments: yup
    .string()
    .min(8, 'Minimum 8 characters!')
    .max(120, 'Maximum 120 characters!')
    .required('Required field!'),
  price: yup.string().matches(/^[1-9]\d*([,.]\d+)?$/, 'Price must be a number'),
});

export const PageTwo = props => {
  const [imageURL, setImageURL] = useState('');

  const textareaChange = () => {
    let textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', function () {
      if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + 'px';
        this.style.borderRadius = '20px';
      }
    });
  };

  const handleUpload = async e => {
    if (!e.target.files[0]) {
      toast.error('Please select a file');
      return;
    }
    if (e.target.files[0].size > 375000) {
      toast.error('You can not upload the file greater then 3 MB');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    postImageToStorage(formData)
      .then(data => {
        setImageURL(data.urlAvatar);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  const handleSubmit = values => {
    const imgUrl =
      imageURL ||
      'https://res.cloudinary.com/daud0cvhu/image/upload/v1679907667/placeholder.jpg.jpg';
    const addData = { ...values, imageURL: imgUrl };
    props.next(addData, true);
    props.onClose();
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Add pet</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={props.data}
        validationSchema={schemaPageTwo}
      >
        <Form autoComplete="on">
          <label className={css.label_other}> The sex: </label>
          <div className={css.radio_sex}>
            <label className={css.radio_label_sex}>
              <span className={css.radio_icon}>
                <Male className={css.svg} />{' '}
              </span>
              <Field
                className={css.radio_btn}
                type="radio"
                name="sex"
                value="male"
              />
              Male
            </label>
            <label className={css.radio_label_sex}>
              <span className={css.radio_icon}>
                <Female className={css.svg} />{' '}
              </span>
              <Field
                className={css.radio_btn}
                type="radio"
                name="sex"
                value="female"
              />
              Female
            </label>
            <ErrorMessage
              name="sex"
              component="div"
              className={css.error_msg}
            />
          </div>

          <label htmlFor="location" className={css.label}>
            Location:
            <Field
              className={css.field}
              id="location"
              type="text"
              name="location"
              placeholder="Brovary, Kyiv or Akhtyrka, Sumy"
              required
            />
            <ErrorMessage
              name="location"
              component="div"
              className={css.error_msg}
            />
          </label>

          {props.data.category === 'sell' && (
            <label htmlFor="price" className={css.label}>
              Price:
              <Field
                className={css.field}
                id="price"
                type="text"
                name="price"
                placeholder="00$"
              />
              <ErrorMessage
                name="price"
                component="div"
                className={css.error_msg}
              />
            </label>
          )}

          <label
            htmlFor="imageURL"
            className={`${css.label} ${css.label_photo}`}
          >
            Load the pet’s image
          </label>
          <label htmlFor="imageURL" className={css.field_photo}>
            <Field
              className={css.file_btn}
              id="imageURL"
              type="file"
              name="imageURL"
              accept="image/*,.png,.jpg,.gif,.web,"
              onChange={handleUpload}
            />
            {imageURL && (
              <img
                src={imageURL}
                className={css.img_photo}
                alt="Pet"
                height={116}
                width={116}
              />
            )}
          </label>

          <label htmlFor="comments" className={css.label}>
            Comments
            <Field
              as="textarea"
              className={`${css.field_last} ${css.field_comments}`}
              id="comments"
              type="text"
              name="comments"
              rows="1"
              placeholder="Some comments"
              onClick={textareaChange}
              required
            />
            <ErrorMessage
              name="comments"
              component="div"
              className={css.error_msg}
            />
          </label>

          <div className={css.btn_list}>
            <button type="submit" className={`${css.btn} ${css.accent_btn}`}>
              Done
            </button>

            <button
              onClick={() => props.prev()}
              type="button"
              className={css.btn}
            >
              Back
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

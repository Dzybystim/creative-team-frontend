import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useState } from 'react';
import css from './ModalAddsPet.module.css';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { postImageToStorage } from '../../../../utilities/helpers';

const addPetSchemaSecond = yup.object().shape({
  comments: yup.string().min(8).max(120).required('Required'),
});

export const SecondPage = ({ data, next, prev, onClose }) => {
  const [imgURL, setImgURL] = useState('');

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
        setImgURL(data.urlAvatar);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  const textareaChange = () => {
    let textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', function () {
      if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + 'px';
        this.style.borderRadius = '20px';
      }
    });
  };

  const handleSubmit = values => {
    const photoURL =
      imgURL ||
      'https://res.cloudinary.com/daud0cvhu/image/upload/v1679907667/placeholder.jpg.jpg';
    const addData = { ...values, photoURL };
    next(addData, true);
    onClose();
  };

  return (
    <div className={css.container}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={data}
        validationSchema={addPetSchemaSecond}
      >
        <Form autoComplete="off">
          <label
            htmlFor="imageURL"
            className={`${css.label} ${css.label_photo}`}
          >
            Add photo and some comments
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
            {imgURL && (
              <img
                src={imgURL}
                className={css.img_photo}
                alt="Pet"
                height={116}
                width={116}
              />
            )}
          </label>

          <label
            htmlFor="comments"
            className={`${css.label} ${css.label_last}`}
          >
            Comments
            <Field
              as="textarea"
              className={`${css.field} ${css.field_comments}`}
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
            <button
              type="submit"
              aria-label="add"
              className={`${css.btn} ${css.accent_btn}`}
            >
              Done
            </button>

            <button
              onClick={() => prev()}
              type="button"
              className={css.btn}
              aria-label="back"
            >
              Back
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

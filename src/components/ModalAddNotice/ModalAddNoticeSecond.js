import { ErrorMessage, Field } from 'formik';
import { ReactComponent as Male } from '../../images/Male.svg';
import { ReactComponent as Female } from '../../images/Female.svg';
import css from './ModalAddNotice.module.css';
import { useRef, useState } from 'react';
import { postImageToStorage } from '../../utilities/helpers';
import { toast } from 'react-toastify';

export const ModalAddNoticeSecond = ({ toggleModalPage, onSubmit, values }) => {
  const [uploaded, setUploaded] = useState('');
  const filePicker = useRef(null);
  console.log('values', values);

  const textareaChange = () => {
    let textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', function () {
      if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + 'px';
        this.style.borderRadius = '20px';
      }
    });
  };

  const handlePick = () => {
    filePicker.current?.click();
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
        setUploaded(data.urlAvatar);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  return (
    <>
      <label className={css.label_other}> The sex: </label>
      <div className={css.radio_sex}>
        <label className={css.radio_label_sex}>
          <span className={css.radio_icon}>
            <Male />{' '}
          </span>
          <Field
            className={css.radio_btn}
            type="radio"
            name="sex"
            value="lost-found"
          />
          <span className={css.radio_icon_text}>Male</span>
        </label>
        <label className={css.radio_label_sex}>
          <span className={css.radio_icon}>
            <Female />{' '}
          </span>
          <Field
            className={css.radio_btn}
            type="radio"
            name="sex"
            value="for-free"
          />
          <span className={css.radio_icon_text}>Female</span>
        </label>
      </div>

      <label htmlFor="location" className={css.label}>
        Location:
      </label>
      <Field
        className={css.field}
        id="location"
        type="text"
        name="location"
        placeholder="Brovary, Kyiv or Akhtyrka, Sumy"
        required
      />
      <ErrorMessage name="location" component="div" />

      <label htmlFor="price" className={css.label}>
        Price:
      </label>
      <Field
        className={css.field}
        id="price"
        type="text"
        name="price"
        placeholder="00$"
        required
      />
      <ErrorMessage name="price" component="div" />

      <label htmlFor="imageURL" className={css.label}>
        Load the pet’s image
      </label>
      <label htmlFor="imageURL" className={css.field_photo}>
        <Field
          className={css.radio_btn}
          id="imageURL"
          type="file"
          name="imageURL"
          //  value={uploaded ? uploaded : ''}
          accept="image/*,.png,.jpg,.gif,.web,"
          ref={filePicker}
          onChange={handleUpload}
          required
        />
        {uploaded && (
          <img
            src={uploaded}
            className={css.img_photo}
            onClick={handlePick}
            alt="Pet"
            height={116}
            width={116}
          />
        )}
      </label>
      <ErrorMessage name="file" component="div" />

      <label htmlFor="comments" className={css.label}>
        Comments
      </label>
      <Field
        as="textarea"
        className={css.field_last}
        id="comments"
        type="text"
        name="comments"
        rows="1"
        placeholder="Some comments"
        onClick={textareaChange}
        required
      />
      <ErrorMessage name="comments" component="div" />

      <ul>
        <li className={css.btn_item}>
          <button type="submit" onSubmit={onSubmit} className={css.btn}>
            Done
          </button>
        </li>
        <li className={css.btn_item}>
          <button onClick={toggleModalPage} type="submit" className={css.btn}>
            Back
          </button>
        </li>
      </ul>
    </>
  );
};

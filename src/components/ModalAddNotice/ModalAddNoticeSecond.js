import { ErrorMessage, Field } from 'formik';
import { ReactComponent as Male } from '../../images/Male.svg';
import { ReactComponent as Female } from '../../images/Female.svg';
import css from './ModalAddNotice.module.css';
import { useState } from 'react';
import { postImageToStorage } from '../../utilities/helpers';

export const ModalAddNoticeSecond = ({ toggleModalPage, onSubmit }) => {
  const [preview] = useState('');
  // setPreview
  const [selectedFile, setSelectedFile] = useState('');
  const [uploaded, setUploaded] = useState('');

  const textareaChange = () => {
    let textarea = document.querySelector('textarea');

    textarea.addEventListener('keyup', function () {
      if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + 'px';
        this.style.borderRadius = '20px';
      }
    });
  };

  // const filePicker = useRef(null);

  // const handlePick = ()=>{
  //    filePicker.current.click();
  // }
  // onChange={(e)=>{
  //     let reader = new FileReader();
  //     reader.onload=()=>{
  //         if (reader.readyState === 2) {
  //             setFieldValue('file', reader.result);
  //             setPreview(reader.result)
  //         }
  //     }
  //     reader.readAsDataURL(e.target.files[0])
  // }}

  // {
  //     "urlAvatar": "url"
  //   }

  const handleUpload = async e => {
    setSelectedFile(e.target.files[0]);
    console.log('selectedFile', selectedFile);
    // if (!selectedFile) {
    //     alert("Please select a file");
    //     return;
    // }

    const formData = new FormData();
    formData.append('avatar', selectedFile);

    postImageToStorage(formData)
      .then(data => {
        setUploaded(data);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  //const handleChange=(e)=>{
  //    console.log(e.target.files);
  //    console.log(e.target.files[0]);
  //    console.log(e.target.files[0].size);

  //    setSelectedFile(e.target.files[0]);

  // if (e.target.files[0].size > 375000) {
  //     alert('you can not upload the file greater then 3 MB')
  //     return;
  // }
  // let reader = new FileReader();
  // reader.onload=()=>{
  //     if (reader.readyState === 2) {
  //       //  formik.setFieldValue('file', reader.result);
  //         setPreview(reader.result)
  //     }
  // }
  // reader.readAsDataURL(e.target.files[0])
  //}

  return (
    <>
      <label className={css.label}> The sex: </label>
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
        className={css.field_second}
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
        className={css.field_second}
        id="price"
        type="text"
        name="price"
        placeholder="00$"
        required
      />
      <ErrorMessage name="price" component="div" />

      <label htmlFor="file" className={css.label}>
        Load the pet’s image
      </label>
      <label htmlFor="file" className={css.field_photo}>
        <Field
          className={css.radio_btn}
          id="file"
          type="file"
          name="file"
          accept="image/*,.png,.jpg,.gif,.web,"
          // ref={filePicker}
          onChange={handleUpload}
          //   onChange={(e)=>{
          //     console.log(e.target.files);
          //     console.log(e.target.files[0]);
          //     console.log(e.target.files[0].size);

          //     if (e.target.files[0].size > 375000) {
          //         alert('you can not upload the file greater then 3 MB')
          //         return;
          //     }
          //     let reader = new FileReader();
          //     reader.onload=()=>{
          //         if (reader.readyState === 2) {
          //           //  formik.setFieldValue('file', reader.result);
          //             setPreview(reader.result)
          //         }
          //     }
          //     reader.readAsDataURL(e.target.files[0])
          // }}

          //  fileRef={fileRef}
          //   onChange={(e) => formik.setFieldValue("file",
          //   event.currentTarget.value[0])}
          required
        />

        {uploaded && (
          <div className={css.field_photo}>
            <img src={preview} alt={preview.name} height={200} width={200} />
          </div>
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

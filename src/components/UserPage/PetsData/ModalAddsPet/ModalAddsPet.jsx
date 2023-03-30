import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { addNewPet } from 'redux/auth/operations';
import { toast } from 'react-toastify';
import { addPetInitialState, addPetSchema } from './index';
import { postImageToStorage } from '../../../../utilities/helpers';
import css from './ModalAddsPet.module.css';

const ModalAddsPet = ({ onClose, setAddPet, addPet }) => {
  const [firstStep, setFirstStep] = useState(true);
  const [imageURL, setImageURL] = useState('');
  const dispatch = useDispatch();

  function isDisabled(dirty, errors) {
    const { name, date, breed } = errors;
    return (
      !dirty || name !== undefined || date !== undefined || breed !== undefined
    );
  }

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
    const imgUrl =
      imageURL ||
      'https://res.cloudinary.com/daud0cvhu/image/upload/v1679907667/placeholder.jpg.jpg';
    const birthdate = moment(values.date, 'YYYYY-MM-DD').format('DD.MM.YYYY');
    const addPet = { ...values, photoURL: imgUrl, date: birthdate };
    dispatch(addNewPet(addPet));
    onClose();
    return;
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Add pet</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={addPetInitialState}
        validationSchema={addPetSchema}
      >
        {({ errors, dirty }) => (
          <Form autoComplete="off">
            {firstStep ? (
              <>
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

                <label
                  className={`${css.label} ${css.label_last}`}
                  htmlFor="breed"
                >
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
                    <option selected value="Dog">Dog</option>
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
                    className={`${css.btn} ${css.accent_btn}`}
                    onClick={() => setFirstStep(false)}
                    disabled={isDisabled(dirty, errors)}
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
              </>
            ) : (
              <>
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
                    onClick={() => setAddPet(!addPet)}
                  >
                    Done
                  </button>

                  <button
                    onClick={() => setFirstStep(true)}
                    type="button"
                    className={css.btn}
                    aria-label="back"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalAddsPet;

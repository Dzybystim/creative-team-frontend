// import { ErrorMessage, Field, Formik } from 'formik';
import { postImageToStorage } from '../../../../utilities/helpers';
import { useState } from 'react';
import { selectors } from '../../../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import css from './EditFoto.module.css';

export default function EditFoto() {
  const [selectedFile, setSelectedFile] = useState('');
  const token = useSelector(selectors.getToken);
  const handleUpload = async e => {
    setSelectedFile(e.target.files[0]);

    const formData = new FormData();
    formData.append('avatar', selectedFile);

    postImageToStorage(formData, token)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  return (
    <>
      <div className={css.container_edit}>
        <label htmlFor="file" className={css.field_photo}>
          <input
            className={css.input_file}
            id="file"
            type="file"
            name="file"
            accept="image/*,.png,.jpg,.gif,.web,"
            onChange={handleUpload}
            required
          />
        </label>
      </div>
    </>
  );
}

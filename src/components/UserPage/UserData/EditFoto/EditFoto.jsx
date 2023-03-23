import { HiOutlineCamera } from 'react-icons/hi2';
import { postImageToStorage } from '../../../../utilities/helpers';
import { useState } from 'react';
import css from './EditFoto.module.css';

export default function EditFoto() {
  const [selectedFile, setSelectedFile] = useState('');
  const handleUpload = async e => {
    setSelectedFile(e.target.files[0]);

    const formData = new FormData();
    formData.append('avatar', selectedFile);

    postImageToStorage(formData)
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
          <HiOutlineCamera className={css.svg_camera} />
          Edit photo
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

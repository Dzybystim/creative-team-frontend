import { HiOutlineCamera } from 'react-icons/hi2';
import { postImageToStorage, userEdit } from '../../../../utilities/helpers';
import css from './EditFoto.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function EditFoto() {
  const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  const tokenFromLocalStorage = localStorage.getItem('persist:users');

  if (tokenFromLocalStorage !== null) {
    const tokenParse = JSON.parse(tokenFromLocalStorage).token;
    const token = tokenParse.slice(1, tokenParse.length - 1);
    setAuthHeader(token);
  } else {
    clearAuthHeader();
  }

  const handleUpload = async e => {
    const file = e.target.files[0];
    if (file.size > 375000) {
      toast.error('Maximum file size is 3 MB');
    }

    const formData = new FormData();
    formData.append('avatar', file);

    postImageToStorage(formData)
      .then(data => {
        userEdit({ photoURL: data.urlAvatar });
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

import { toast } from 'react-toastify';

const errorToast = text => {
  return toast.error(text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export default errorToast;

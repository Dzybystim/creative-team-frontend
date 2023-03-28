import axios from 'axios';

axios.defaults.baseURL = 'https://backend.petly.club';

export const fetchOurFriends = async () => {
  return await axios
    .get(`/servicesSidebar`)
    .then(response => response.data)
    .catch(err => console.log(err));
};

export const fetchNews = async () => {
  return await axios
    .get(`/news`)
    .then(response => response.data)
    .catch(err => console.error(err));
};

export const fetchUserAndPets = async token => {
  try {
    const response = await axios.get(`/userAndPets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error.response.status);
  }
};

export const postImageToStorage = async img => {
  try {
    const response = await axios.post(`/uploadAvatar`, img);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const passTokenToHeadersAxios = () => {
  const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
 //   console.log('token', token);
  };
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
    //   console.log('clear')
  };

  const tokenFromLocalStorage = localStorage.getItem('persist:users');
  if (tokenFromLocalStorage !== null) {
    const tokenParse = JSON.parse(tokenFromLocalStorage).token;
    const token = tokenParse.slice(1, tokenParse.length - 1);
    setAuthHeader(token);
  } else {
    clearAuthHeader();
  }
};

export const userEdit = async fieldData => {
  try {
    const response = await axios.patch(`/users/edit`, fieldData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export const addToSelectedNotices = async noticeId => {
//   try {
//     const response = await axios.post(`/notices/selected/${noticeId}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const deleteFromSelectedNotices = async noticeId => {
//   try {
//     const response = await axios.delete(`/notices/selected/${noticeId}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getNoticesById = async noticeId => {
  try {
    const response = await axios.get(`/notices/${noticeId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export const postNewNotice = async data => {
//   try {
//     const response = await axios.post(`/notices/user`, data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getUserIdFromLocalStorage = () => {
  const idFromLocalStorage = localStorage.getItem('persist:users');
  if (idFromLocalStorage !== 'null') {
    const idParse = JSON.parse(idFromLocalStorage).id;
    if (idParse === 'null') {
      return;
    }
    const userId = idParse.slice(1, idParse.length - 1);
    return userId;
  } else {
    return;
  }
};

import axios from 'axios';

axios.defaults.baseURL = 'http://backend.petly.club';

export const fetchOurFriends = async () => {
  return await axios
    .get(`/servicesSidebar`)
    .then(response => response.data)
    .catch(err => console.log(err));
};

export const getNoticesByCategories = async category => {
  try {
    const response = await axios.get(`/notices/category?category=${category}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchNews = async () => {
  try {
    const response = await axios.get(`/news`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserAndPets = async token => {
  try {
    const response = await axios.get(`/userAndPets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postImageToStorage = async img => {
  try {
    const response = await axios.post(`/uploadAvatar`, img);
    console.log('response', response);
    console.log('response.data', response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const passTokenToHeadersAxios = () => {
  const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    //   console.log('token', token)
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

export const getNoticesByTitle = async title => {
  try {
    const response = await axios.get(`/notices/title?title=${title}`);
    return response.data;
  } catch (error) {
    console.error(error);
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

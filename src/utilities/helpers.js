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

export const postImageToStorage = async (img, token) => {
  try {
    const response = await axios.post(`/uploadAvatar`, img, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('response', response);
    console.log('response.data', response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

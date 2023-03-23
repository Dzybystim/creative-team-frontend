import axios from 'axios';
import { baseURL } from './baseURL';


export const fetchOurFriends = async () => {
  return await axios
    .get(`${baseURL}/servicesSidebar`)
    .then(response => response.data)
    .catch(err => console.log(err));
};

export const getNoticesByCategories = async category => {
  try {
    const response = await axios.get(
      `${baseURL}/notices/category?category=${category}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchNews = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/news`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

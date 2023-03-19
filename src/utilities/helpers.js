import axios from 'axios';
import { baseURL } from './baseURL';

export const fetchOurFriends = async () => {
  return await axios
    .get(`${baseURL}/servicesSidebar`)
    .then(response => response.data)
    .catch(err => console.log(err));
};

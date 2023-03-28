import axios from 'axios';
import { passTokenToHeadersAxios } from '../utilities/helpers';

axios.defaults.baseURL = 'https://backend.petly.club';
passTokenToHeadersAxios();

export const addPet = async newPet => {
  const { data } = await axios.post('/pets', newPet);
  return data;
};

export const deletePet = async id => {
  const { data } = await axios.delete(`/pets/${id}`);
  return data;
};

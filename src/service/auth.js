import axios from 'axios';

const BASE_URL = 'https://backend.petly.club//';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const addPet = async newPet => {
  const { data } = await instance.post('/api/pets', newPet, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const deletePet = async id => {
  const { data } = await instance.delete(`/api/pets/${id}`);
  return data;
};

export default instance;

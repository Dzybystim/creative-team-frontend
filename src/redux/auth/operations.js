import * as api from '../../service/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorToast, successToast } from '../../components/Toast';

export const addNewPet = createAsyncThunk(
  'auth/addPet',
  async (newPet, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable add new pet');
      }

      const data = await api.addPet(newPet);
      return data;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const deletePet = createAsyncThunk(
  'auth/deletePet',
  async (id, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const persistedToken = auth.token;

      if (!persistedToken) {
        rejectWithValue('Unable delete pet');
      }
      successToast('Pet was successfully deleted');
      await api.deletePet(id);
      return id;
    } catch ({ response }) {
      errorToast('Something went wrong, try to reload the page');
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

import * as api from '../../service/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorToast, successToast } from '../../components/Toast';

export const addNewPet = createAsyncThunk(
  'auth/addPet',
  async (newPet, thunkAPI) => {
    
    try {
      const data = await api.addPet(newPet);
      
      return data;
    } catch (error) {
      errorToast('Something went wrong, try to reload the page');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'auth/deletePet',
  async (id, thunkAPI) => {
    try {
      await api.deletePet(id);
      successToast('Pet was successfully deleted');
      return id;
    } catch (error) {
      errorToast('Something went wrong, try to reload the page');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

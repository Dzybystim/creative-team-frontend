import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNoticesByCategories = createAsyncThunk(
  'notices/fetchByCategories',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(
        `/notices/category?category=${category}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/notices/user', data);
      console.log('add new notice result', response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',

  async (noticeId, thunkAPI) => {
    try {
      console.log('noticeId', noticeId);
      const response = await axios.delete(`/notices/user/${noticeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticesByTitle = createAsyncThunk(
  'notices/getNoticesByTitle',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `/notices/title?category=${query.category}&title=${query.queryFromSearchParams}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllSelectedNotices = createAsyncThunk(
  'notices/fetchSelectedNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/selected`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllOwnNotices = createAsyncThunk(
  'notices/getOwnNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/user`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'favoriteNotices/addFavoriteNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.post(`/notices/selected/${noticeId}`);
      console.log('to love');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'favoriteNotices/deleteFavoriteNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/selected/${noticeId}`);
      console.log('from love');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

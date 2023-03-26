import { createSlice } from '@reduxjs/toolkit';
import {
  getNoticesByCategories,
  addNotices,
  deleteNotices,
  getNoticesByTitle,
  getAllSelectedNotices,
  getAllOwnNotices,
} from './operations';
//import { logOut } from "../auth/operations";

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      //* статус "pending"
      .addCase(getNoticesByCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNoticesByTitle.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllSelectedNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllOwnNotices.pending, state => {
        state.isLoading = true;
      })

      //* статус "rejected"
      .addCase(getNoticesByCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getNoticesByTitle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllSelectedNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllOwnNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //* статус "fulfilled"
      .addCase(getNoticesByCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(getNoticesByTitle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllSelectedNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllOwnNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      }),

  //  .addCase(logOut.fulfilled, (state, action) => {
  //      state.items = [];
  //      state.error = null;
  //      state.isLoading = false;
  //     }),
});

export const noticesReducer = noticesSlice.reducer;

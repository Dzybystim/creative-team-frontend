
import { createSlice } from '@reduxjs/toolkit';
import {
  getNoticesByCategories,
  addNotice,
  deleteNotice,
  getNoticesByTitle,
  getAllSelectedNotices,
  getAllOwnNotices,
} from './operations';


//import { logOut } from "../auth/operations";

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  
  extraReducers: builder =>
    builder

    //* статус "pending"
   .addCase(getNoticesByCategories.pending, (state)=>{
     state.isLoading = true;
   })
   .addCase(addNotice.pending, (state)=>{
     state.isLoading = true;
   })
   .addCase(deleteNotice.pending, (state)=>{
     state.isLoading = true;
   })
   .addCase(getNoticesByTitle.pending, (state)=>{
     state.isLoading = true;
   })
   .addCase(getAllSelectedNotices.pending, (state)=>{
     state.isLoading = true;
   })
   .addCase(getAllOwnNotices.pending, (state)=>{
     state.isLoading = true;
   })
   .addCase(addToFavorite.pending, (state)=>{
    state.isLoading = true;
  })
  .addCase(deleteFromFavorite.pending, (state)=>{
    state.isLoading = true;
  })

  
 //* статус "rejected"  
   .addCase(getNoticesByCategories.rejected, (state, action) => {
     state.isLoading = false;
     state.error = action.payload;
   })
   .addCase(addNotice.rejected, (state, action) => {
     state.isLoading = false;
     state.error = action.payload;
   })
   .addCase(deleteNotice.rejected, (state, action) => {
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
   .addCase(addToFavorite.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(deleteFromFavorite.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })

  
 //* статус "fulfilled"  
 .addCase(getNoticesByCategories.fulfilled, (state, action) => {
     state.isLoading = false;
     state.error = null;
     state.items = action.payload;
   })
 .addCase(addNotice.fulfilled, (state, action) => {
     state.isLoading = false;
     state.error = null;
     state.items.push(action.payload);
   })
 .addCase(deleteNotice.fulfilled, (state, action) => {
     state.isLoading = false;
     state.error = null;
     state.items = state.items.filter(item => item._id !== action.meta.arg);
   })
 .addCase(getNoticesByTitle.fulfilled, (state, action) => {
     state.isLoading = false;
     state.error = null;
     state.items = action.payload;
   })
   .addCase(getAllOwnNotices.fulfilled, (state, action) => {
     state.isLoading = false;
     state.error = null;
     state.items = action.payload;
    })
    .addCase(getAllSelectedNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
       //  state.items = action.payload;
        state.favorites = action.payload;
      })
   .addCase(addToFavorite.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.favorites.push(action.payload);
  })
.addCase(deleteFromFavorite.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.favorites = state.items.filter(item => item._id !== action.meta.arg);
  })


  //  .addCase(logOut.fulfilled, (state, action) => {
  //      state.items = [];
  //      state.error = null;
  //      state.isLoading = false;
  //     }),
});

export const noticesReducer = noticesSlice.reducer;

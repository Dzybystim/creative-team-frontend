import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { userApi } from './fetchUser';

const initialState = {
  user: {
    email: null,
    name: null,
    cityRegion: null,
    mobilePhone: null,
  },
  token: null,
  isLogged: false,
  loadUser: false,
  errorServer: false,
  errorRegistration: false,
};

export const authSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.logIn.matchFulfilled,
      (state, { payload }) => {
        const { user } = payload;
        state.user.email = user.email;
        state.user.name = user.name;
        state.user.cityRegion = user.cityRegion;
        state.user.mobilePhone = user.mobilePhone;
        state.token = user.accessToken;
        state.isLogged = true;
        state.loadUser = false;
        state.errorServer = false;
      }
    );
    builder.addMatcher(userApi.endpoints.logIn.matchPending, state => {
      state.loadUser = true;
    });
    builder.addMatcher(
      userApi.endpoints.logIn.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 400) {
          state.loadUser = false;
          state.errorServer = true;
        }
        state.loadUser = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.registrationUser.matchFulfilled,
      (state, { payload }) => {
        const { user } = payload;
        state.user.email = user.email;
        state.user.name = user.name;
        state.user.cityRegion = user.cityRegion;
        state.user.mobilePhone = user.mobilePhone;
        state.token = user.accessToken;
        state.isLogged = true;
        state.loadUser = false;
      }
    );
    builder.addMatcher(
      userApi.endpoints.registrationUser.matchPending,
      state => {
        state.loadUser = true;
      }
    );
    builder.addMatcher(
      userApi.endpoints.registrationUser.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 400) {
          state.loadUser = false;
          state.errorRegistration = true;
        }
        state.loadUser = false;
      }
    );

    builder.addMatcher(userApi.endpoints.logOut.matchPending, state => {
      state.loadUser = true;
      state.token = null;
      state.isLogged = false;
    });
    builder.addMatcher(userApi.endpoints.logOut.matchFulfilled, () => {
      return { ...initialState };
    });
    builder.addMatcher(userApi.endpoints.logOut.matchRejected, () => {
      return { ...initialState };
    });
  },
});

const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['token', 'isLogged', 'selected', 'id'],
};

export const persistSliceAuth = persistReducer(
  persistConfig,
  authSlice.reducer
);

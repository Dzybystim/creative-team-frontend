import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { userApi } from './fetchUser';

const initialState = {
  user: {
    email: null,
    password: null,
    name: null,
    cityRegion: null,
    mobilePhone: null,
    id: null,
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
        const { data } = payload;
        console.log('payload:', payload);
        state.user.email = data.user;
        state.user.name = data.name;
        state.user.cityRegion = data.cityRegion;
        state.user.mobilePhone = data.mobilePhone;
        state.user.id = data._id;
        state.token = data.token;
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
      }
    );
    builder.addMatcher(
      userApi.endpoints.registrationUser.matchFulfilled,
      (state, action) => {
        const { user } = action.payload;
        console.log('payloadreg:', action);
        state.user.email = user.email;
        state.user.name = user.name;
        state.user.cityRegion = user.cityRegion;
        state.user.mobilePhone = user.mobilePhone;
        state.user.id = user._id;
        state.token = user.token;
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
      }
    );
    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        const { email, name, cityRegion, mobilePhone } = payload.user;
        state.user.email = email;
        state.user.name = name;
        state.user.cityRegion = cityRegion;
        state.user.mobilePhone = mobilePhone;
        state.isLogged = true;
        state.loadUser = false;
      }
    );
    builder.addMatcher(userApi.endpoints.getCurrentUser.matchPending, state => {
      state.loadUser = true;
    });
    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchRejected,
      (state, { payload }) => {
        if (
          payload?.data.additionalInfo === 'Provide valid token' ||
          payload?.data.additionalInfo === 'jwt'
        ) {
          state.token = ``;
          state.loadUser = false;
          state.isLogged = false;
        }
      }
    );
    builder.addMatcher(userApi.endpoints.logOut.matchPending, state => {
      state.loadUser = true;
    });
    builder.addMatcher(userApi.endpoints.logOut.matchFulfilled, () => {
      return { ...initialState };
    });
    builder.addMatcher(userApi.endpoints.logOut.matchRejected, () => {
      return { ...initialState };
    });
    builder.addMatcher(
      userApi.endpoints.updateUser.matchFulfilled,
      (state, { payload }) => {
        const { user } = payload;
        state.user.email = user.email;
        state.user.name = user.name;
        state.user.cityRegion = user.cityRegion;
        state.user.mobilePhone = user.mobilePhone;
        state.user.id = user._id;

        state.token = user.token;
        state.isLogged = true;
        state.loadUser = false;
        state.errorServer = false;
      }
    );
    builder.addMatcher(userApi.endpoints.updateUser.matchPending, state => {
      state.loadUser = true;
    });
    builder.addMatcher(
      userApi.endpoints.updateUser.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 400) {
          state.errorServer = true;
          state.loadUser = false;
        }
      }
    );
  },
});

const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['token', 'isLogged'],
};

export const persistSliceAuth = persistReducer(
  persistConfig,
  authSlice.reducer
);

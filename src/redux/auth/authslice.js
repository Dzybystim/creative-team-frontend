import { createSlice, current } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { userApi } from './fetchUser';

const initialState = {
  user: {
    email: null,
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
        console.log(payload);
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
        console.log('state:', current(state));

        const { user, token } = action.payload;
        const userArg = action.meta.arg.originalArgs;
        state.user.email = userArg.email;
        state.user.name = userArg.name;
        state.user.cityRegion = userArg.cityRegion;
        state.user.mobilePhone = userArg.mobilePhone;
        state.user.id = user._id;
        state.token = token;
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
  whitelist: ['token', 'isLogged'],
};

export const persistSliceAuth = persistReducer(
  persistConfig,
  authSlice.reducer
);

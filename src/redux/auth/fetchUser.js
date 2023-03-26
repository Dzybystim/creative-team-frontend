import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../utilities/baseURL';

const HOST = baseURL;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${HOST}`,
    prepareHeaders: (headers, get) => {
      const accessToken = get.getState().users.token;
      const localToken = JSON.parse(
        localStorage.getItem('persist:users')
      ).token;
      const tokenWithoutQuotes = localToken.replace(/"/g, '');
      if (accessToken || tokenWithoutQuotes) {
        headers.set(
          'Authorization',
          `Bearer ${accessToken || tokenWithoutQuotes}`
        );
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    registrationUser: builder.mutation({
      query: payload => ({
        url: '/users/signup',
        method: 'POST',
        body: payload,
      }),
    }),
    logIn: builder.mutation({
      query: payload => ({
        url: '/users/login',
        method: 'POST',
        body: payload,
      }),
    }),

    logOut: builder.mutation({
      query: () => ({
        url: '/users/logout',
      }),
    }),
  }),
});

export const {
  useRegistrationUserMutation,
  useLogInMutation,
  useLogOutMutation,
} = userApi;

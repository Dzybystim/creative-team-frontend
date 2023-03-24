import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../utilities/baseURL';

const HOST = baseURL;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${HOST}`,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().users.token;
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
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
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useRegistrationUserMutation,
  useLogInMutation,
  useLogOutMutation,
} = userApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../utilities/baseURL';

const HOST = baseURL;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${HOST}`,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().users.token;
      console.log('accessToken:', accessToken);
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
    getCurrentUser: builder.query({
      query: () => '/user/current',
      providesTags: ['User'],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'GET',
      }),
    }),
    forgotPassword: builder.mutation({
      query: ({ email }) => ({
        url: '/auth/forgotPassword',
        method: 'PATCH',
        body: { email },
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ id, password }) => ({
        url: '/auth/recoverPassword',
        method: 'PATCH',
        body: { id, password },
      }),
    }),
    updateUser: builder.mutation({
      query: payload => ({
        url: '/user/current',
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    updateUserAvatar: builder.mutation({
      query: payload => ({
        url: 'user/current/avatar',
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useRegistrationUserMutation,
  useLogInMutation,
  useLogOutMutation,
  useForgotPasswordMutation,
  useUpdatePasswordMutation,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useUpdateUserAvatarMutation,
} = userApi;

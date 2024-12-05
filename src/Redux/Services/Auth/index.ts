import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gurrl-talk.projectstagingzone.com/dev/apis/',
  }),
  endpoints: builder => ({
    signup: builder.mutation({
      query: body => ({
        url: 'user',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: body => ({
        url: `auth/login`,
        method: 'POST',
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: body => ({
        url: `auth/password-reset/request`,
        method: 'POST',
        body,
      }),
    }),
    verify: builder.mutation({
      query: body => ({
        url: `auth/password-reset/verify`,
        method: 'POST',
        body,
      }),
    }),
    setPassword: builder.mutation({
      query: body => ({
        url: `auth/password-reset/reset`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useVerifyMutation,
  useSetPasswordMutation,
} = authApi;

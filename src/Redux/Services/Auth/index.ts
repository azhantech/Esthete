import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://projectstagingzone.com:18001/grwm/v1/apis/',
  }),
  endpoints: builder => ({
    signup: builder.mutation({
      query: body => ({
        url: 'auth/signup',
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
        url: `auth/forget-password`,
        method: 'POST',
        body,
      }),
    }),
    verify: builder.mutation({
      query: body => ({
        url: `auth/verify-otp`,
        method: 'POST',
        body,
      }),
    }),
    setPassword: builder.mutation({
      query: body => ({
        url: `auth/reset-password`,
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

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {BASE_URL} from '@env';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://projectstagingzone.com:18001/grwm/v1/api',
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as {user: {token: string}})?.user?.token;
      console.log('Bearer token ========================>', token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    getNotifications: builder.query({
      query: () => `notification`,
      keepUnusedDataFor: 0,
    }),
    getSettings: builder.query({
      query: () => `/settings`,
      keepUnusedDataFor: 0,
    }),

    changePassword: builder.mutation({
      query: body => ({
        url: `/user/password`,
        method: 'PUT',
        body,
      }),
    }),
    updateProfile: builder.mutation({
      query: body => ({
        url: `user/update`,
        method: 'PUT',
        body,
      }),
    }),
    uploadImage: builder.mutation({
      query: body => ({
        url: `user/upload/verification`,
        method: 'POST',
        body,
      }),
    }),
    getProfile: builder.query({
      query: () => `user/profile`,
      keepUnusedDataFor: 0,
    }),
    getQuestions: builder.query({
      query: () => `/questionnaire`,
      keepUnusedDataFor: 0,
    }),
    subscribePackage: builder.mutation({
      query: body => ({
        url: `subscription/subscribe`,
        method: 'POST',
        body,
      }),
    }),
    getProducts: builder.query({
      query: () => `/product/get`,
      keepUnusedDataFor: 0,
    }),
    getProductsById: builder.query({
      query: id => `/product/get/${id?.id}`,
      keepUnusedDataFor: 0,
    }),
    getExperts: builder.query({
      query: () => `/consultant/get`,
      keepUnusedDataFor: 0,
    }),
    updateImage: builder.mutation({
      query: body => ({
        url: `general/upload-image`,
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useChangePasswordMutation,
  useUpdateProfileMutation,
  useGetProfileQuery,
  useGetSettingsQuery,
  useUploadImageMutation,
  useGetNotificationsQuery,
  useSubscribePackageMutation,
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useGetExpertsQuery,
  useUpdateImageMutation,
} = userApi;

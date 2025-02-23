import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
// import {BASE_URL} from '@env';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.100.17:3000/grwm/v1/api/',
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as {user: {token: string}})?.user?.token;

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
        url: `user/password`,
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
      query: () => `questionnaire`,
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
      query: () => `product/get`,
      keepUnusedDataFor: 0,
    }),
    getProductsById: builder.query({
      query: id => `product/get/${id?.id}`,
      keepUnusedDataFor: 0,
    }),
    getRecommendationProducts: builder.query({
      query: () => `product/suggested/get`,
      keepUnusedDataFor: 0,
    }),
    acceptProduct: builder.mutation({
      query: body => ({
        url: `product/accept`,
        method: 'POST',
        body,
      }),
    }),
    saveProduct: builder.query({
      query: () => `product/saved/get`,
      keepUnusedDataFor: 0,
    }),
    rejectProduct: builder.mutation({
      query: body => ({
        url: `product/reject`,
        method: 'POST',
        body,
      }),
    }),

    getExperts: builder.query({
      query: () => `consultant/get`,
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
    updatePreferences: builder.mutation({
      query: body => ({
        url: `user/update-preferences`,
        method: 'PUT',
        body,
      }),
    }),
    getEducationContent: builder.query({
      query: type => `content/get?type=${type?.type}`,
      keepUnusedDataFor: 0,
    }),
    getAllEducationContent: builder.query({
      query: () => `content/get`,
      keepUnusedDataFor: 0,
    }),
    getEducationContentById: builder.query({
      query: body => `content/${body?.id}?type=${body?.type}`,
      keepUnusedDataFor: 0,
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
  useUpdatePreferencesMutation,
  useGetAllEducationContentQuery,
  useGetEducationContentQuery,
  useGetEducationContentByIdQuery,
  useGetRecommendationProductsQuery,
  useAcceptProductMutation,
  useRejectProductMutation,
  useSaveProductQuery,
} = userApi;

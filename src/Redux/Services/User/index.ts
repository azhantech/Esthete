import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
// import {BASE_URL} from '@env';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://projectstagingzone.com:18001/grwm/v1/apis/',
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
    addGoal: builder.mutation({
      query: body => ({
        url: `goal/add`,
        method: 'POST',
        body,
      }),
    }),
    getGoals: builder.query({
      query: () => `goal/get`,
      keepUnusedDataFor: 0,
    }),
    // getGoalById: builder.query({
    //   query: id => `goal/get/goalId=${id?.id}`,
    //   keepUnusedDataFor: 0,
    // }),
    getGoalById: builder.query({
      query: id => {
        try {
          return `goal/get/${id?.id}`;
        } catch (error) {
          console.log('Error fetching goal by ID:', error);
          throw error;
        }
      },
      keepUnusedDataFor: 0,
    }),
    updateGoal: builder.mutation({
      query: body => ({
        url: `goal/update/${body?.id}`,
        method: 'PUT',
        body,
      }),
    }),

    getProductQuestions: builder.query({
      query: id => `productQuestion/get/${id?.id}`,
      keepUnusedDataFor: 0,
    }),
    submitProductFeedback: builder.mutation({
      query: body => ({
        url: `product/feedback/submit`,
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
    contactUS: builder.mutation({
      query: body => ({
        url: `feedback/create`,
        method: 'POST',
        body,
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
  useUpdatePreferencesMutation,
  useGetAllEducationContentQuery,
  useGetEducationContentQuery,
  useGetEducationContentByIdQuery,
  useGetRecommendationProductsQuery,
  useAcceptProductMutation,
  useRejectProductMutation,
  useSaveProductQuery,
  useAddGoalMutation,
  useGetGoalsQuery,
  useGetGoalByIdQuery,
  useUpdateGoalMutation,
  useGetProductQuestionsQuery,
  useSubmitProductFeedbackMutation,
  useContactUSMutation
} = userApi;

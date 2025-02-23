import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {create} from 'react-test-renderer';
// import {BASE_URL} from '@env';

export const CommunityFormApi = createApi({
  reducerPath: 'CommunityFormApi',
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
    updatePreferences: builder.mutation({
      query: body => ({
        url: `user/update-preferences`,
        method: 'PUT',
        body,
      }),
    }),
    createThread: builder.mutation({
      query: body => ({
        url: `communities/forum/create`,
        method: 'POST',
        body,
      }),
    }),
    getThread: builder.query({
      query: () => `communities/forum/list`,
      keepUnusedDataFor: 0,
    }),
    getThreadById: builder.query({
      query: id => `communities/forum/${id}`,
      keepUnusedDataFor: 0,
    }),
    createComment: builder.mutation({
      query: ({id, body}) => ({
        url: `communities/forum/${id}/comment`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useUpdatePreferencesMutation,
  useCreateThreadMutation,
  useGetThreadQuery,
  useGetThreadByIdQuery,
  useCreateCommentMutation,
} = CommunityFormApi;

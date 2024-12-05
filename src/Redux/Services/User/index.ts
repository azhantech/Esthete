import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {BASE_URL} from '@env';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gurrl-talk.projectstagingzone.com/dev/apis/',
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
    getPackages: builder.query({
      query: () => `subscription/packages`,
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
        url: `user/profile`,
        method: 'PUT',
        body,
        headers: {
          // Ensure the correct `Content-Type` is set for form data
          'Content-Type': 'multipart/form-data',
        },
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
    getMessages: builder.query({
      query: conversationId =>
        `/message/conversation/${conversationId}?limit=${200}`,
      keepUnusedDataFor: 0,
    }),
    getConversations: builder.query({
      query: () => `/message/user/conversations?limit=${200}`,
      keepUnusedDataFor: 0,
    }),
    getGroups: builder.query({
      query: () => `group?limit=${200}`,
      keepUnusedDataFor: 0,
    }),
    getQuestionsList: builder.query({
      query: () => `questionnaire`,
      keepUnusedDataFor: 0,
    }),
    getSuggestedGroups: builder.query({
      query: () => `group/suggested`,
      keepUnusedDataFor: 0,
    }),
    getContent: builder.query({
      query: body => `/content/get?type=${body}`,
      keepUnusedDataFor: 0,
    }),
    // /group/{groupId}/leave
    leaveGroup: builder.mutation({
      query: body => ({
        url: `group/${body}/leave`,
        method: 'POST',
      }),
    }),
    clearChat: builder.mutation({
      query: body => ({
        url: `message/conversation/${body}/clear`,
        method: 'DELETE',
      }),
    }),
    joinGroup: builder.mutation({
      query: id => ({
        url: `group/${id}/join`,
        method: 'POST',
      }),
    }),
    sendMessage: builder.mutation({
      query: body => ({
        url: `/message`,
        method: 'POST',
        body,
      }),
    }),
    subscribePackage: builder.mutation({
      query: body => ({
        url: `subscription/subscribe`,
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
  useGetConversationsQuery,
  useJoinGroupMutation,
  useGetMessagesQuery,
  useLeaveGroupMutation,
  useClearChatMutation,
  useGetGroupsQuery,
  useGetSettingsQuery,
  useSendMessageMutation,
  useGetSuggestedGroupsQuery,
  useUploadImageMutation,
  useGetNotificationsQuery,
  useGetPackagesQuery,
  useGetQuestionsListQuery,
  useSubscribePackageMutation,
  useGetContentQuery,
} = userApi;

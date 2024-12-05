import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const routeApi = createApi({
  reducerPath: 'routeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://custom-dev.onlinetestingserver.com/transportation/api',
    prepareHeaders: (headers, {getState}) => {
      const {token}: any = getState()?.user;
      console.log('token ========================>', token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    getStudentsRoute: builder.query({
      query: () => '/get-route-students',
      keepUnusedDataFor: 0,
    }),
    markPresent: builder.mutation({
      query: id => ({
        url: `/mark-destination/${id}`,
        method: 'POST',
      }),
    }),
    markAttendance: builder.mutation({
      query: body => ({
        url: `/mark-attendance`,
        method: 'POST',
        body,
      }),
    }),
    markStudentDroppedSchool: builder.mutation({
      query: id => ({
        url: `/drop-school/${id}`,
        method: 'POST',
      }),
    }),
    markStudentDroppedHome: builder.mutation({
      query: id => ({
        url: `/drop-home/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetStudentsRouteQuery,
  useMarkPresentMutation,
  useMarkStudentDroppedSchoolMutation,
  useMarkStudentDroppedHomeMutation,
  useMarkAttendanceMutation,
} = routeApi;

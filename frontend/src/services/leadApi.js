import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const leadApi = createApi({
  reducerPath: 'leadApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Lead'],
  endpoints: (builder) => ({
    getLeads: builder.query({
      query: () => '/leads',
      transformResponse: (response) => response.data,
      providesTags: ['Lead'],
    }),
    addLead: builder.mutation({
      query: (lead) => ({
        url: '/leads',
        method: 'POST',
        body: lead,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: ['Lead'],
    }),
  }),
});

export const { useGetLeadsQuery, useAddLeadMutation } = leadApi; 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ky from 'ky'

import type { DocsList } from './types'

// Define a service using a base URL and expected endpoints
export const docsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api',
    fetchFn: async (...args) => ky(...args),
  }),
  endpoints: (builder) => ({
    getDocsList: builder.query<DocsList, void>({
      query: () => `/docs_list`,
    }),
  }),
  reducerPath: 'docsApi',
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDocsListQuery } = docsApi

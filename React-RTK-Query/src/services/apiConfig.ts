import {
  FetchBaseQueryArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { FetchArgs, FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';

import { axiosInstance } from './axiosRequest';
import { API_URL } from '@/config';

const axiosBaseQuery =
  ({
    baseUrl,
  }: FetchBaseQueryArgs): BaseQueryFn<
    FetchArgs,
    unknown,
    FetchBaseQueryError,
    {},
    FetchBaseQueryMeta
  > =>
  async (args) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + args.url,
        method: args.method,
        data: args.body,
        params: args.params,
      });

      return {
        data: result?.data,
      };
    } catch (error: any) {
      return {
        error: {
          data: error.response?.data,
          status: error.response?.status || 500,
        },
      };
    }
  };

export const RTKQueryApiConfig = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
});

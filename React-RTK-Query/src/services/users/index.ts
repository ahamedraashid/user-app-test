import { User } from '@/features/UserList/hooks/types';
import { RTKQueryApiConfig as api } from '../apiConfig';
export const addTagTypes = ['Users'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      postUser: build.mutation<PostPatientApiResponse, PostPatientApiArg>({
        query: (queryArg) => ({
          url: `/user`,
          method: 'POST',
          body: queryArg.patientRequestBody,
        }),
        invalidatesTags: ['Users'],
      }),
      getUserList: build.query<
        GetuserListReponse,
        GetuserListApiArgs
      >({
        query: () => ({ url: `/user`, method: 'GET' }),
        providesTags: ['Users'],
      }),
      // getPatientByGuid: build.query<
      //   GetPatientByGuidApiResponse,
      //   GetPatientByGuidApiArg
      // >({
      //   query: (queryArg) => ({ url: `/patient/${queryArg.guid}` }),
      //   providesTags: ['Patient'],
      // }),
      // putPatientByGuid: build.mutation<
      //   PutPatientByGuidApiResponse,
      //   PutPatientByGuidApiArg
      // >({
      //   query: (queryArg) => ({
      //     url: `/patient/${queryArg.guid}`,
      //     method: 'PUT',
      //     body: queryArg.patientRequestBody,
      //   }),
      //   invalidatesTags: ['Patient'],
      // }),
    }),
    overrideExisting: false,
  });
// export { injectedRtkApi as UserListApi };
export const {
  useGetUserListQuery,
  usePostUserMutation,
} = injectedRtkApi;


export type PostPatientApiResponse =
  /** status 200 Successful Response */ PatientCreateResponse;
export type PostPatientApiArg = {
  /** Body required in the request */
  patientRequestBody: PatientRequestBody;
};
export type GetuserListApiReponse =  /** status 200 Successful Response */ GetuserListReponse;
export type GetuserListApiArgs = void;
export type GetPatientByGuidApiResponse =
  /** status 200 Successful Response */ Patient;
export type GetPatientByGuidApiArg = {
  guid: string;
};
export type PutPatientByGuidApiResponse =
  /** status 200 Successful Response */ Patient;
export type PutPatientByGuidApiArg = {
  guid: string;
  /** Body required in the request */
  patientRequestBody: PatientRequestBody;
};
export type PatientCreateResponse = {
  guid: string;
  name: string;
  phone: string;
  email: string;
};
export type PatientRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
};
export type Patient = {
  guid: string;
  name: string;
  phone: string;
  email: string;
  updatedAt: number;
  personType: string;
};
export type GetuserListReponse = {
  total: number;
  skip: number;
  limit: number;
  users: User[];
};

import { RTKQueryApiConfig as api } from '../apiConfig';
export const addTagTypes = ['Patient'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      postPatient: build.mutation<PostPatientApiResponse, PostPatientApiArg>({
        query: (queryArg) => ({
          url: `/patient`,
          method: 'POST',
          body: queryArg.patientRequestBody,
        }),
        invalidatesTags: ['Patient'],
      }),
      postPatientSearch: build.query<
        PostPatientSearchApiResponse,
        PostPatientSearchApiArg
      >({
        query: () => ({ url: `/patient/search`, method: 'POST' }),
        providesTags: ['Patient'],
      }),
      getPatientByGuid: build.query<
        GetPatientByGuidApiResponse,
        GetPatientByGuidApiArg
      >({
        query: (queryArg) => ({ url: `/patient/${queryArg.guid}` }),
        providesTags: ['Patient'],
      }),
      putPatientByGuid: build.mutation<
        PutPatientByGuidApiResponse,
        PutPatientByGuidApiArg
      >({
        query: (queryArg) => ({
          url: `/patient/${queryArg.guid}`,
          method: 'PUT',
          body: queryArg.patientRequestBody,
        }),
        invalidatesTags: ['Patient'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as RTKGeneratedApis };
export type PostPatientApiResponse =
  /** status 200 Successful Response */ PatientCreateResponse;
export type PostPatientApiArg = {
  /** Body required in the request */
  patientRequestBody: PatientRequestBody;
};
export type PostPatientSearchApiResponse =
  /** status 200 Successful Response */ PatientSearchResponse;
export type PostPatientSearchApiArg = void;
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
export type PatientSearchResponse = {
  total: number;
  items: Patient[];
};

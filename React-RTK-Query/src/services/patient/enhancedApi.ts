import { RTKGeneratedApis } from '.';

const enhancedApi = RTKGeneratedApis.enhanceEndpoints({
  addTagTypes: ['Patient'],
  endpoints: {
    postPatient: {
      invalidatesTags: ['Patient'],
    },
    postPatientSearch: {
      providesTags: ['Patient'],
    },
    getPatientByGuid: {
      providesTags: ['Patient'],
    },
    putPatientByGuid: {
      invalidatesTags: [],
    },
  },
});

export const {
  usePostPatientSearchQuery,
  usePostPatientMutation,
  useGetPatientByGuidQuery,
  usePutPatientByGuidMutation,
} = enhancedApi;

export { enhancedApi as PatientApis };

import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './src/services/swagger.yml',
  apiFile: './src/services/apiConfig.ts',
  apiImport: 'RTKQueryApiConfig',
  exportName: 'RTKGeneratedApis',
  tag: true,
  outputFiles: {
    'src/services/patient/index.ts': {
      filterEndpoints: [/patient/i],
    },
  },
  // to override the mutation to be query
  endpointOverrides: [
    {
      pattern: ['postPatientSearch'],
      type: 'query',
    },
  ],
};

export default config;

import { notification } from 'antd';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PatientFormData } from './types';
import { Patient } from '@/services/code-gen/openapi';
import { usePutPatientByGuidMutation } from '@/services/patient/enhancedApi';

interface UseUpdatePatientFormParams {
  editRecord?: Patient;
  cleanUp: () => void;
}

export const useUpdatePatientForm = ({
  cleanUp,
  editRecord,
}: UseUpdatePatientFormParams) => {
  const [putPatientByGuid, { isLoading }] = usePutPatientByGuidMutation();
  // React hook form
  const formHandler = useForm<PatientFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });
  const { handleSubmit, reset } = formHandler;
  const onSubmit: SubmitHandler<PatientFormData> = async (formData) => {
    try {
      await putPatientByGuid({
        patientRequestBody: formData, // Update data
        guid: editRecord?.guid ?? '', //
      }).unwrap();
      cleanUp();
      notification.success({ message: 'Saved' });
    } catch (err) {}
  };

  useEffect(() => {
    reset(editRecord);
  }, [editRecord, reset]);

  return {
    ...formHandler,
    onSubmit: handleSubmit(onSubmit),
    isSubmitting: isLoading,
  };
};

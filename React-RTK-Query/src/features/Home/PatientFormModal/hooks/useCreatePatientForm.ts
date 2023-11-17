import { notification } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PatientFormData } from './types';
import { usePostPatientMutation } from '@/services/patient/enhancedApi';

interface UseCreatePatientFormParams {
  cleanUp: () => void;
}

export const useCreatePatientForm = ({
  cleanUp,
}: UseCreatePatientFormParams) => {
  const [postPatient, { isLoading }] = usePostPatientMutation();
  // React hook form
  const formHandler = useForm<PatientFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });
  const { handleSubmit } = formHandler;

  const onSubmit: SubmitHandler<PatientFormData> = async (data) => {
    try {
      await postPatient({ patientRequestBody: data }).unwrap();
      cleanUp();
      notification.success({ message: 'Created' });
    } catch (err) {
      notification.success({ message: 'Unable to create' });
    }
  };

  return {
    ...formHandler,
    onSubmit: handleSubmit(onSubmit),
    isSubmitting: isLoading,
  };
};

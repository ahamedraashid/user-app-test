import { notification } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';

import { UserFormData } from './types';
import { usePostUserMutation } from '@/services/users/index';

interface UseCreatePatientFormParams {
  cleanUp: () => void;
}

export const useCreatePatientForm = ({
  cleanUp,
}: UseCreatePatientFormParams) => {
  const [postPatient, { isLoading }] = usePostUserMutation();
  // React hook form
  const formHandler = useForm<UserFormData>({
    defaultValues: {
      firstName: '',
      email: '',
      lastName: '',
    },
  });
  const { handleSubmit } = formHandler;

  const onSubmit: SubmitHandler<UserFormData> = async (data) => {
    console.log(data);
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

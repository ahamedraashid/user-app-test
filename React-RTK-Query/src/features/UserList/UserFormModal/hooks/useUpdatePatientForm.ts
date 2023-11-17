import { notification } from 'antd';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { UserFormData } from './types';
import { usePutPatientByGuidMutation } from '@/services/patient/enhancedApi';
import { User } from '../../hooks/types';

interface UseUpdateUserFormParams {
  editRecord?: User;
  cleanUp: () => void;
}

export const useUpdatePatientForm = ({
  cleanUp,
  editRecord,
}: UseUpdateUserFormParams) => {
  const [putPatientByGuid, { isLoading }] = usePutPatientByGuidMutation();
  // React hook form
  const formHandler = useForm<UserFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });
  const { handleSubmit, reset } = formHandler;
  const onSubmit: SubmitHandler<UserFormData> = async (formData) => {
    try {
      await putPatientByGuid({
        patientRequestBody: formData, // Update data
        guid: editRecord?.id ?? '', //
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

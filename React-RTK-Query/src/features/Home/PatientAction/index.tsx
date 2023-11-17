// This component will display the action (Create Button) which will show the patient form modal
import { Button } from 'antd';
import { useState } from 'react';

import PatientFormModal from '../PatientFormModal';
import { useCreatePatientForm } from '../PatientFormModal/hooks/useCreatePatientForm';

const PatientAction = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // React Hook which contain the create patient logic
  const { control, onSubmit, reset, isSubmitting } = useCreatePatientForm({
    cleanUp: () => {
      reset();
      setModalOpen(false);
    },
  });

  return (
    <div className="flex justify-end">
      <Button onClick={() => setModalOpen(true)} type="primary">
        Create
      </Button>
      <PatientFormModal
        control={control}
        modalProps={{
          open: isModalOpen,
          onCancel: () => setModalOpen(false),
          footer: null,
          title: 'Create Patient',
        }}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default PatientAction;

// This component will display a modal component with different input field
import { Button, Input, Modal, ModalProps } from 'antd';
import { Control, Controller } from 'react-hook-form';

import { PatientFormData } from './hooks/types';

interface PatientFormModalProps {
  modalProps: ModalProps;
  onSubmit: () => void;
  control: Control<PatientFormData>;
  isSubmitting: boolean;
}

const PatientFormModal = ({
  control,
  modalProps,
  onSubmit,
  isSubmitting,
}: PatientFormModalProps) => (
  <Modal {...modalProps} centered>
    <form className="flex flex-col gap-4 pt-4" onSubmit={onSubmit}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Input
            placeholder="Name"
            size="large"
            {...field}
            autoComplete="off"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            autoComplete="off"
            placeholder="Email"
            size="large"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <Input
            autoComplete="off"
            placeholder="Phone"
            size="large"
            {...field}
          />
        )}
      />
      <div className="flex justify-end">
        <Button htmlType="submit" type="primary" loading={isSubmitting}>
          Save
        </Button>
      </div>
    </form>
  </Modal>
);

export default PatientFormModal;

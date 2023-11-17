// This component will display a table component with the list of patient
import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';

import PatientFormModal from '../PatientFormModal';
import { useUpdatePatientForm } from '../PatientFormModal/hooks/useUpdatePatientForm';
import { Patient } from '@/services/code-gen/openapi';
import { usePostPatientSearchQuery } from '@/services/patient/enhancedApi';

const PatientTableListing = () => {
  const [editRecord, setEditRecord] = useState<Patient | undefined>();

  const { data, isLoading, isFetching, refetch } = usePostPatientSearchQuery();

  // React Hook which contain the update patient logic
  const { control, onSubmit, isSubmitting } = useUpdatePatientForm({
    editRecord,
    cleanUp: () => setEditRecord(undefined),
  });

  // Table Column
  const columns: ColumnsType<Patient> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setEditRecord(record);
            }}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  console.log(isLoading, 'isLoading');
  console.log(isFetching, 'isFetching');

  return (
    <>
      <Table
        columns={columns}
        dataSource={data?.items ?? []}
        rowKey="guid"
        loading={isFetching}
      />
      <button onClick={() => refetch()}>Refetch</button>
      <PatientFormModal
        control={control}
        modalProps={{
          open: !!editRecord,
          onCancel: () => setEditRecord(undefined),
          footer: null,
          title: 'Edit Patient',
        }}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default PatientTableListing;

// This component will display a table component with the list of patient
import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';

import UserFormModal from '../UserFormModal';
import { useUpdatePatientForm } from '../UserFormModal/hooks/useUpdatePatientForm';
import { usePostPatientSearchQuery } from '@/services/patient/enhancedApi';
import { User } from '../hooks/types';
import { useGetUserListQuery } from '@/services/users';

const UserTableListing = () => {
  const [editRecord, setEditRecord] = useState<User | undefined>();

  const { data, isLoading, isFetching, refetch } = useGetUserListQuery();

  // React Hook which contain the update patient logic
  const { control, onSubmit, isSubmitting } = useUpdatePatientForm({
    editRecord,
    cleanUp: () => setEditRecord(undefined),
  });

  // Table Column
  const columns: ColumnsType<User> = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
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
         dataSource={data?.users ?? []}
        rowKey="guid"
        loading={isFetching}
      />
      <button onClick={() => refetch()}>Refetch</button>
      <UserFormModal
        control={control}
        modalProps={{
          open: !!editRecord,
          onCancel: () => setEditRecord(undefined),
          footer: null,
          title: 'Edit User',
        }}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default UserTableListing;

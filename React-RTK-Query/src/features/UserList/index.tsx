import UserAction from './UserAction';
import TableListing from './UserTableListing';

const UserHome = () => (
  <div className="flex h-screen w-screen flex-col bg-blue-100 p-8">
    <div className="flex flex-col gap-4 rounded-xl bg-white p-6">
      <UserAction />
      <TableListing />
    </div>
  </div>
);

export default UserHome;

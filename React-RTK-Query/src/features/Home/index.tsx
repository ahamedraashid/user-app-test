import PatientAction from './PatientAction';
import TableListing from './PatientTableListing';

const Home = () => (
  <div className="flex h-screen w-screen flex-col bg-blue-100 p-8">
    <div className="flex flex-col gap-4 rounded-xl bg-white p-6">
      <PatientAction />
      <TableListing />
    </div>
  </div>
);

export default Home;

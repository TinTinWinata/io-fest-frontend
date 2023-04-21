import InvicibleNavbar from '../../components/invicible-navbar';
import TabContainer from '../../components/tab/tab-container';
import { ITab } from '../../types/tab';
import UserTable from './user-table';

const TAB_LIST: ITab[] = [
  {
    name: 'User',
    component: <UserTable />,
  },
  {
    name: 'Forum',
    component: <UserTable />,
  },
];

export default function Admin() {
  return (
    <>
      <InvicibleNavbar />
      <div className="w-[80vw]  min-h-screen x-center">
        <div className="w-full">
          <TabContainer tabs={TAB_LIST} />
        </div>
      </div>
    </>
  );
}

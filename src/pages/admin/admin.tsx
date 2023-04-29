import InvicibleNavbar from '../../components/invicible-navbar';
import TabContainer from '../../components/tab/tab-container';
import { useUserAuth } from '../../hooks/user-context';
import { ITab } from '../../types/tab';

const TAB_LIST: ITab[] = [
  {
    name: 'User',
  },
  {
    name: 'Forum',
  },
];

export default function Admin() {
  const { user } = useUserAuth();
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

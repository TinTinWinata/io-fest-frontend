import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import InvicibleNavbar from '../../components/invicible-navbar';
import UserTable from './user-table';

export default function Admin() {
  return (
    <>
      <InvicibleNavbar />
      <div className="w-[80vh] h-screen x-center">
        <div className="">
          <Tabs>
            <TabList>
              <Tab>User</Tab>
              <Tab>Forum</Tab>
            </TabList>
            <TabPanel className={''}>
              <UserTable />
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

import { useState } from 'react';
import ForumTableContainer from '../../pages/admin/forum/forum-table-container';
import UserTableContainer from '../../pages/admin/user/user-table-container';
import { ITab } from '../../types/tab';

export default function TabContainer({ tabs }: { tabs: ITab[] }) {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const getActiveTabClass = (index: number) =>
    tabIndex === index ? 'opacity-100' : 'opacity-0';

  const getActiveHeaderTabClass = (index: number) =>
    tabIndex === index
      ? ' bg-blue-500 text-white dark:bg-orange-600  '
      : ' text-blue-500  dark:text-orange-600 ';

  const handleClick = (index: number) => setTabIndex(index);

  return (
    <div className="">
      {/* Tab Header */}
      <div className="flex center ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={
              'cursor-pointer py-3 px-10 text-center w-full font-semibold rounded-md mx-2 border border-blue-500  hover:bg-blue-500 hover:text-white transition-all mb-2 dark:border-orange-500 dark:text-gray-200  dark:hover:text-white dark:hover:bg-orange-600' +
              getActiveHeaderTabClass(index)
            }
          >
            {tab.name}
          </div>
        ))}
      </div>

      {/* Tab Component */}
      <div className="relative w-full h-full">
        {tabIndex == 0 && <UserTableContainer />}
        {tabIndex == 1 && <ForumTableContainer />}
        {/* {tabIndex == 1 && <UserTable />} */}
      </div>
    </div>
  );
}

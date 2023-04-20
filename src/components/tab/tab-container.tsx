import { useState } from 'react';
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
              'cursor-pointer py-3 px-10  w-full font-semibold rounded-t-md  border-b-0 border border-l-blue-500 border-r-blue-500 border-t-blue-500  hover:bg-blue-500 hover:text-white transition-all dark:border-l-orange-500 dark:border-r-orange-500 dark:border-t-orange-500  dark:hover:text-white dark:hover:bg-orange-600' +
              getActiveHeaderTabClass(index)
            }
          >
            {tab.name}
          </div>
        ))}
      </div>

      {/* Tab Component */}
      <div className="relative w-full h-full">
        {tabs.map((tab, index) => (
          <div
            className={
              'transition-all absolute w-full h-full ' +
              getActiveTabClass(index)
            }
            key={index}
          >
            {tab.component}
          </div>
        ))}
      </div>
    </div>
  );
}

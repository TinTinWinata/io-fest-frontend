import { useState } from 'react';
import { USER_FILTER } from '../../types/user';
import UserTableFilter from './user-table-filter';

export default function UserTableFilterContainer({
  handlerFilter,
}: {
  handlerFilter: (filter: USER_FILTER) => void;
}) {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const handleClickAction = () => setOpenFilter((prev) => !prev);
  const handleFilterProxy = (filter: USER_FILTER) => {
    handlerFilter(filter);
    setOpenFilter(false);
  };
  return (
    <div>
      <button
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={handleClickAction}
      >
        <span className="sr-only">Filter Button</span>
        Filter
        <svg
          className="w-3 h-3 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {openFilter && <UserTableFilter handlerFilter={handleFilterProxy} />}
    </div>
  );
}

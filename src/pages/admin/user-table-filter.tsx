import { USER_FILTER } from '../../types/user';
import { ROLE } from '../../utils/role';

interface IFilterListComponent {
  name: string;
  filter: USER_FILTER;
}

const FILTER_LIST: IFilterListComponent[] = [
  {
    name: 'All',
    filter: USER_FILTER.ALL,
  },
  {
    name: ROLE.doctor,
    filter: USER_FILTER.DOCTOR,
  },
  {
    name: ROLE.admin,
    filter: USER_FILTER.ADMIN,
  },
  {
    name: ROLE.user,
    filter: USER_FILTER.MEMBER,
  },
];

export default function UserTableFilter({
  handlerFilter,
}: {
  handlerFilter: (filter: USER_FILTER) => void;
}) {
  return (
    <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ">
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        {FILTER_LIST.map((filter, index) => (
          <li key={index}>
            <div
              onClick={() => {
                handlerFilter(filter.filter);
              }}
              className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {filter.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

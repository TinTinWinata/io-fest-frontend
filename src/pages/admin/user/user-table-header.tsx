import { USER_FILTER } from '../../types/user';
import UserTableFilterContainer from './user-table-filter-container';
import UserTableSearch from './user-table-search';

interface IUserTableHeaderProps {
  handleSearch: (searchText: string) => void;
  handlerFilter: (filter: USER_FILTER) => void;
}

export default function UserTableHeader({
  handlerFilter,
  handleSearch,
}: IUserTableHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between pb-4 w-full  dark:bg-gray-900">
        <UserTableFilterContainer handlerFilter={handlerFilter} />
        <UserTableSearch handleSearch={handleSearch} />
      </div>
    </>
  );
}

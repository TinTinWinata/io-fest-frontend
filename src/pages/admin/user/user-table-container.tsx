import { useEffect, useState } from 'react';
import useAdmin from '../../../hooks/use-admin';
import { useUserAuth } from '../../../hooks/user-context';
import { EXAMPLE_USER, IUser, USER_FILTER } from '../../../types/user';
import UserRemoveModal from './user-remove-modal';
import UserTable from './user-table';
import UserTableHeader from './user-table-header';

export default function UserTableContainer() {
  // const [filter, setFilter] = useState<>();
  const { user } = useUserAuth();
  const { data } = useAdmin(user.token);
  const [currUsers, setCurrUsers] = useState<IUser[]>([]);
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<IUser>(EXAMPLE_USER);
  const [searchText, setSearchText] = useState<string>('');
  const [filter, setFilter] = useState<USER_FILTER>(USER_FILTER.ALL);

  useEffect(() => {
    fetchFilterAndSearch();
  }, [filter, searchText, data]);

  const handleRemoveUserButton = (user: IUser) => {
    setSelectedUser(user);
    setOpenRemoveModal(true);
  };

  const fetchFilterAndSearch = () => {
    const filteredData = getFilterData(filter);
    const searchedData = getSearchData(filteredData, searchText);
    setCurrUsers(searchedData);
  };

  const getFilterData = (filter: USER_FILTER) => {
    switch (filter) {
      case USER_FILTER.ALL:
        return [...data.admins, ...data.doctors, ...data.members];
      case USER_FILTER.ADMIN:
        return data.admins;
      case USER_FILTER.DOCTOR:
        return data.doctors;
      case USER_FILTER.MEMBER:
        return data.members;
    }
  };

  const handleFilter = (filter: USER_FILTER) => {
    setFilter(filter);
  };

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
  };

  const getSearchData = (datas: IUser[], searchText: string) => {
    return datas.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  if (data)
    return (
      <>
        <UserTableHeader
          handleSearch={handleSearch}
          handlerFilter={handleFilter}
        />
        <UserRemoveModal
          user={selectedUser}
          open={openRemoveModal}
          setOpen={setOpenRemoveModal}
        />
        <UserTable
          handlerRemoveUserButton={handleRemoveUserButton}
          users={currUsers}
        />
      </>
    );
  else return <></>;
}

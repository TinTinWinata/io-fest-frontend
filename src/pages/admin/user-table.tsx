import { IUser } from '../../types/user';
import UserContainer from './user-container';

interface IUserTableProps {
  users: IUser[];
  handlerRemoveUserButton: (user: IUser) => void;
}

export default function UserTable({
  users,
  handlerRemoveUserButton,
}: IUserTableProps) {
  if (!users || users === undefined || users.length === 0) {
    return (
      <div className="center font-semibold p-10">
        There is no user available!
      </div>
    );
  }
  return (
    <>
      <div className="w-full relative  overflow-x-auto border border-t-0 dark:border-orange-600 rounded-b-lg">
        {/* To Do : Make Table Header */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-orange-600 dark:text-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserContainer
                removeHandler={handlerRemoveUserButton}
                user={user}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

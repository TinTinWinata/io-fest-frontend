import { IUser } from '../../types/user';
import UserContainer from './user-container';

const EXAMPLE_USERS: IUser[] = [
  {
    email: 'tintin@gmail.com',
    isActive: false,
    name: 'winata',
    password: 'asd',
    username: 'ads',
    id: '1',
    imageUrl: 'https://picsum.photos/200',
    role: 'dokter',
  },
  {
    email: 'tintin@gmail.com',
    isActive: true,
    name: 'winata',
    password: 'asd',
    username: 'ads',
    id: '1',
    imageUrl: 'https://picsum.photos/200',
    role: 'dokter',
  },
];

export default function UserTable() {
  return (
    <div className="w-full relative overflow-x-auto border sm:rounded-lg">
      {/* To Do : Make Table Header */}
      {/* <UserTableHeader /> */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
          {EXAMPLE_USERS.map((user, index) => (
            <UserContainer user={user} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

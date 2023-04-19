import { IUser } from '../../types/user';

export default function UserContainer({ user }: { user: IUser }) {
  const getTdClass = () => 'px-6 py-4';

  const getStatusClass = (bool: boolean): string =>
    bool ? 'bg-green-500' : 'bg-red-500';
  const getStatus = (bool: boolean): string => (bool ? 'Active' : 'Not Active');

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={user.imageUrl}
          alt="Jese image"
        />
        <div className="pl-3">
          <div className="text-base font-semibold">
            {user.name} ({user.username})
          </div>
          <div className="font-normal text-gray-500">{user.email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{user.role}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div
            className={`h-2.5 w-2.5 rounded-full ${getStatusClass(
              user.isActive
            )} mr-2`}
          ></div>{' '}
          {getStatus(user.isActive)}
        </div>
      </td>
      <td className="px-6 py-4 ">
        <div className="flex">
          <a
            href="#"
            className="mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit user
          </a>
        </div>
      </td>
    </tr>
  );
}

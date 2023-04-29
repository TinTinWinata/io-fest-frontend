import { IForum } from '../../../types/forum';
import { getImageUrl } from '../../../utils/helper';

export default function ForumContainer({
  forum,
  removeHandler,
}: {
  forum: IForum;
  removeHandler: (forum: IForum) => void;
}) {
  const handleOnClickDelete = () => {
    removeHandler(forum);
  };

  return (
    <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={getImageUrl(forum.creator.profilePicture)}
          alt="Jese image"
        />
        <div className="pl-3">
          <div className="text-base font-semibold">{forum.title}</div>
          <div className="font-normal text-gray-500">{forum.title}</div>
        </div>
      </th>
      <td className="px-6 py-4">{forum.seen}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className={`h-2.5 w-2.5 rounded-full mr-2`}>{forum.title}</div>
        </div>
      </td>
      <td className="px-6 py-4 ">
        <div className="flex">
          <div
            onClick={handleOnClickDelete}
            className="cursor-pointer mx-1 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Delete
          </div>
        </div>
      </td>
    </tr>
  );
}

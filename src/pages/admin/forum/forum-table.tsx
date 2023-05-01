import { IForum } from '../../../types/forum';
import ForumContainer from './forum-container';

interface IForumTableProps {
  forums: IForum[];
  handlerRemoveForumButton: (forum: IForum) => void;
}

export default function ForumTable({
  forums,
  handlerRemoveForumButton,
}: IForumTableProps) {
  if (!forums || forums === undefined || forums.length === 0) {
    return (
      <div className="center font-semibold p-10">
        There is no forum available!
      </div>
    );
  }
  return (
    <>
      <div className="shadow-sm w-full relative  overflow-x-auto border border-t-0 dark:border-blue-600 rounded-b-lg">
        {/* To Do : Make Table Header */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-600 dark:text-gray-50">
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
            {forums.map((forum, index) => (
              <ForumContainer
                removeHandler={handlerRemoveForumButton}
                forum={forum}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

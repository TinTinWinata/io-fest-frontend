import { FaComment, FaEye } from 'react-icons/fa';
import { IForum } from '../types/forum';

export default function ForumCard({ forum }: { forum: IForum }) {
  return (
    <div
      data-aos="fade-up"
      className="cursor-pointer p-4 m-4 border border-blue-500 rounded-xl w-80 h-80"
    >
      <div className="flex">
        <img
          src={forum.user.imageUrl}
          className="w-16 h-16 rounded-[100%]"
          alt=""
        />
        <div className="center">
          <div className="ml-2">
            <h1 className="font-bold">{forum.title}</h1>
            <h3 className="text-gray-500 dark:text-gray-400">
              {forum.user.name}
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-3 p-3 h-[155px] line-clamp-6 overflow-hidden">
        <p className="tracking-wide text-gray-500 dark:text-gray-400">
          {forum.description}
        </p>
      </div>
      <hr className="h-px mt-3  bg-gray-300 border-0 dark:bg-gray-500"></hr>
      <div className="flex p-3 text-gray-400">
        <div className="center">
          <FaEye className="w-5 h-5 " />
        </div>
        <div className="center text-semibold  ">
          <p className="mx-2">{forum.seen}</p>
        </div>
        <div className="center ml-2">
          <FaComment className="w-5 h-5 " />
        </div>
        <div className="center text-semibold  ">
          <p className="ml-2">{forum.comment}</p>
        </div>
      </div>
    </div>
  );
}

import { FaComment, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IForum } from '../types/forum';
import { getImageUrl } from '../utils/helper';

export default function ForumCard({ forum }: { forum: IForum }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/detail/${forum.id}`);
  return (
    <div className="">
      <div
        data-aos="fade-up"
        onClick={handleClick}
        className="cursor-pointer p-4 m-4 border bg-gray-50 dark:bg-transparent dark:border-orange-600 border-blue-500 rounded-lg w-[400px] h-80"
      >
        <div className="flex">
          <img
            src={getImageUrl(forum.creator.imageUrl)}
            className="w-16 h-16 rounded-[100%]"
            alt=""
          />
          <div className="center">
            <div className="ml-2">
              <h1 className="font-bold">{forum.title}</h1>
              <h3 className="text-gray-500 dark:text-gray-400">
                {forum.creator.name}
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
            <p className="ml-2">{forum.forumComments.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

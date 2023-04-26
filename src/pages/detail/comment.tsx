import { IComment } from '../../types/comment';
import { getImageUrl } from '../../utils/helper';

export default function Comment({ comment }: { comment: IComment }) {
  return (
    <div className="flex p-2 my-10  rounded-lg">
      {/* User's who Comment */}
      <div className="center flex w-36 ">
        <img
          src={getImageUrl(comment.commenter.profilePicture)}
          className="w-10 h-10 rounded-full"
          alt=""
        />
        <div className="ml-1">
          <div className="font-semibold ml-1">{comment.commenter.name}</div>
          <div className="text-sm">( {comment.commenter.role} )</div>
        </div>

        {/* Right Line */}
        {/* <div className="h-full w-[0.5px] bg-gray-500 opacity-50 ml-3"></div> */}
      </div>
      {/* Comment */}
      <div className="y-center  w-full ml-2 text-sm leading-6 tracking-wide text-gray-500 dark:text-gray-200">
        {comment.comment}
      </div>
    </div>
  );
}

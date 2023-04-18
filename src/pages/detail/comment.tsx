import { IComment } from '../../types/comment';

export default function Comment({ comment }: { comment: IComment }) {
  return (
    <div className="flex p-2 my-10 ">
      {/* User's who Comment */}
      <div className="center flex w-36">
        <img
          src={comment.user.imageUrl}
          className="w-10 h-10 rounded-full"
          alt=""
        />
        <div className="ml-1">
          <div className="font-semibold ml-1">{comment.user.name}</div>
          <div className="text-sm">( {comment.user.role} )</div>
        </div>

        {/* Right Line */}
        <div className="h-full w-[0.5px] bg-gray-500 opacity-50 ml-3"></div>
      </div>
      {/* Comment */}
      <div className="y-center  w-full ml-2 text-sm leading-6 tracking-wide text-gray-500 dark:text-gray-200">
        {comment.text}
      </div>
    </div>
  );
}

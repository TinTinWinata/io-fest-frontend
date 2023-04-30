import moment from 'moment';
import { FaComment, FaEye } from 'react-icons/fa';
import InvicibleNavbar from '../../components/invicible-navbar';
import useForumDetail from '../../hooks/use-forum-detail';
import { useUserAuth } from '../../hooks/user-context';
import { getImageUrl } from '../../utils/helper';
import Comment from './comment';
import CreateComment from './create-comment';
import PreviewAttachment from './preview-attachment';

export default function Detail() {
  const { data, loading, createComment } = useForumDetail();
  const { isAuth, isDoctor } = useUserAuth();
  if (!data || loading) {
    return <></>;
  }
  return (
    <div className="min-w-screen min-h-screen">
      <InvicibleNavbar />
      <div className="mb-12 bg-gray-50 dark:bg-transparent w-[80vw] p-3 rounded-md  dark:border-blue-500 border-gray-500 border-opacity-50 border">
        {/* creator */}
        <div className="flex ">
          <div className="center">
            <img
              className="w-20 h-20 rounded-full"
              src={getImageUrl(data.creator.profilePicture)}
              alt=""
            />
          </div>
          <div className="center">
            <div className="ml-2">
              <div className="ml-1 font-semibold">{data.creator.name}</div>
              <div className="text-sm opacity-80">( {data.creator.role} )</div>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        {/* Title & Description */}
        <div className="px-5 py-10">
          <div className="font-bold text-lg">{data.title}</div>
          <div className="">{data.description}</div>
        </div>
        {/* Preview Attachment */}
        <div className="flex gap-2 mb-2 ml-4">
          {data.forumAttachments?.map((attachment, index) => (
            <PreviewAttachment attachment={attachment} key={index} />
          ))}
        </div>

        {/* Forum Extras */}
        <div className="flex justify-between px-2">
          <div className="">
            <div className="flex ml-3">
              <div className="center">
                <FaComment className="mt-[1.5px] w-3 h-3 text-gray-500 dark:text-gray-50" />
              </div>
              <p className="mx-1 text-sm text-gray-500 dark:text-gray-50">
                {data.forumComments.length}
              </p>
              <div className="center ml-2">
                <FaEye className="mt-[1.5px] w-4 h-4 text-gray-500 dark:text-gray-50" />
              </div>
              <p className="mx-1 text-sm text-gray-500 dark:text-gray-50">
                {data.seen}
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-50">
            {moment(data.createdAt).format('MMMM Do YYYY')}
          </p>
        </div>
        <hr className="my-2" />

        {/* Comments */}
        {data.forumComments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
        {data.forumComments.length === 0 && (
          <div className="w-full h-full center">
            <h1 className="p-12 font-semibold text-xl">
              There's no comment yet!
            </h1>
          </div>
        )}

        {isDoctor() && <CreateComment handler={createComment} />}
      </div>
    </div>
  );
}

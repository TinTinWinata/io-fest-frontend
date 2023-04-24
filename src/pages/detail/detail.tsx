import InvicibleNavbar from '../../components/invicible-navbar';
import useForumDetail from '../../hooks/use-forum-detail';
import { useUserAuth } from '../../hooks/user-context';
import { getImageUrl } from '../../utils/helper';
import Comment from './comment';
import CreateComment from './create-comment';

export default function Detail() {
  const { data, loading, createComment } = useForumDetail();
  const { isAuth } = useUserAuth();
  if (!data || loading) {
    return <></>;
  }
  return (
    <div className="min-w-screen min-h-screen">
      <InvicibleNavbar />
      <div className="mb-12 bg-gray-50 dark:bg-transparent w-[80vw] p-3 rounded-md  dark:border-orange-500 border-blue-500 border">
        {/* creator */}
        <div className="flex ">
          <div className="center">
            <img
              className="w-20 h-20 rounded-full"
              src={getImageUrl(data.creator.imageUrl)}
              alt=""
            />
          </div>
          <div className="center">
            <div className="ml-2">
              <div className="ml-1 font-semibold">{data.creator.name}</div>
              <div className="text-sm">( {data.creator.role} )</div>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        {/* Title & Description */}
        <div className="p-5">
          <div className="font-bold text-lg">{data.title}</div>
          <div className="">{data.description}</div>
        </div>
        {/* Forum Extras */}
        {/* <div className="flex justify-end">
        <p>Seen</p>
      </div> */}
        <hr className="my-2" />

        {/* Comments */}
        {data.forumComments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
        {/* Create Comment */}
        <hr className="my-5" />

        {isAuth() && <CreateComment handler={createComment} />}
      </div>
    </div>
  );
}

import CreatePostButton from '../../components/create-post-button';
import ForumCardContainer from '../../components/forum-card-container';
import InvicibleNavbar from '../../components/invicible-navbar';
import useForum from '../../hooks/use-forum';
import { IUser } from '../../types/user';

const EXAMPLE_USER: IUser = {
  isActive: true,
  password: 'asd',
  username: 'asd',
  id: 'asd',
  email: 'tintin6892@gmail.com',
  name: 'tintin',
  role: 'Doctor',
  imageUrl: 'https://picsum.photos/200',
};

export default function Home() {
  const { data, createForum } = useForum();
  return (
    <>
      <InvicibleNavbar />
      <div className="h-screen">
        <div className="">
          <h1 className="text-center text-3xl font-semibold mb-4">Top Forum</h1>
          <ForumCardContainer forums={data}></ForumCardContainer>
        </div>
        <CreatePostButton handler={createForum} />
      </div>
    </>
  );
}

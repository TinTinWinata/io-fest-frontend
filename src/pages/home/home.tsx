import ForumCardContainer from '../../components/forum-card-container';
import InvicibleNavbar from '../../components/invicible-navbar';
import useForum from '../../hooks/use-forum';
import { IUser } from '../../types/user';
import Pagination from './pagination';

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
  const {
    data,
    createForum,
    totalForum,
    perPage,
    page,
    nextPage,
    isHasNextPage,
    isHasPrevPage,
    previousPage,
    hasPage,
    setPage,
  } = useForum();
  return (
    <>
      <InvicibleNavbar />
      <div className="min-h-screen ">
        <div className="">
          {/* <h1 className="text-center text-3xl font-semibold mb-4">Top Forum</h1> */}
          <ForumCardContainer forums={data}></ForumCardContainer>
        </div>
        {/* I think it's silly */}
        {/* <CreatePostButton handler={createForum} /> */}
        <div className="mt-12">
          <Pagination
            setPage={setPage}
            isHasNext={isHasNextPage}
            isHasPrev={isHasPrevPage}
            nextPage={nextPage}
            page={page}
            perPage={perPage}
            prevPage={previousPage}
            totalForum={totalForum}
            hasPage={hasPage}
          />
        </div>
      </div>
    </>
  );
}

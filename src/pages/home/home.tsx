import CreatePostButton from '../../components/create-post-button';
import ForumCardContainer from '../../components/forum-card-container';
import InvicibleNavbar from '../../components/invicible-navbar';
import useForum from '../../hooks/use-forum';
import ForumFilter from './forum-filter';
import Pagination from './pagination';

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
    setFilter,
  } = useForum();

  return (
    <>
      <InvicibleNavbar />
      <div className="min-h-screen ">
        <div className="">
          <div className="w-full flex  justify-end mb-2">
            <ForumFilter setFilter={setFilter} />
          </div>
          {/* <h1 className="text-center text-3xl font-semibold mb-4">Top Forum</h1> */}
          <ForumCardContainer forums={data}></ForumCardContainer>
        </div>
        {/* I think it's silly */}
        <CreatePostButton handler={createForum} />
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

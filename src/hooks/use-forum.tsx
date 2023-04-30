import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IForum } from '../types/forum';
import { endpoints } from '../utils/endpoint';
import { displayError } from '../utils/helper';
import Service from '../utils/service';
import {
  toastLoading,
  toastUpdateFailed,
  toastUpdateSuccess,
} from '../utils/toast';
import { useUserAuth } from './user-context';

enum FORUM_FILTER {
  Top,
  Newest,
}

export default function useForum() {
  const { user } = useUserAuth();
  const [data, setData] = useState<IForum[]>([]);
  const [filter, setFilter] = useState<FORUM_FILTER>(FORUM_FILTER.Top);

  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(1);
  const [totalForum, setTotalForum] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const maxPage = () => Math.ceil(totalForum / perPage);
  const minPage = () => 1;
  const hasPage = (page: number) => page <= maxPage() && page >= minPage();

  const isHasNextPage = () => page < maxPage();
  const isHasPrevPage = () => page > minPage();
  const nextPage = () => isHasNextPage() && setPage((prev) => prev + 1);

  const previousPage = () => isHasPrevPage() && setPage((prev) => prev - 1);
  const resetPage = () => setPage(1);

  const remove = async (forumId: string) => {
    setLoading(true);
    const id = toastLoading('Wait were deleting this forum ...');
    if (!user) return;
    const data = {
      forumId: forumId,
    };

    const service = new Service(user.token);
    const response = await service.request(
      endpoints.forumDelete,
      undefined,
      data
    );
    setSuccess(!response.isError);
    if (response.isError) {
      toastUpdateFailed(id, 'Looks like this forum cannot be deleted!');
      displayError(response.data);
      return;
    }
    toastUpdateSuccess(id, 'Successfully deleted this forum!');
    fetchData();
    setLoading(false);
  };

  const getSearchText = (): string =>
    searchParams.get('search') ? searchParams.get('search')!.toString() : '';

  const fetchData = async () => {
    setLoading(true);
    const service = new Service();
    const search = getSearchText();
    console.log('search text: ', search);
    if (filter === FORUM_FILTER.Top) {
      const response = await service.request(
        endpoints.forumNewest,
        undefined,
        undefined,
        { page: page, search: search }
      );
      setData(response.data.forums);
      setTotalForum(response.data.totalForums);
      setPerPage(response.data.perPage);
      setSuccess(!response.isError);
    } else if (filter === FORUM_FILTER.Newest) {
      const response = await service.request(
        endpoints.forumTop,
        undefined,
        undefined,
        { page: page, search: search }
      );
      setData(response.data);
      setSuccess(!response.isError);
    }
    setLoading(false);
  };

  const createForum = async (title: string, description: string) => {
    const data = {
      title,
      description,
    };
    const service = new Service(user.token);
    const response = await service.request(
      endpoints.forumCreate,
      undefined,
      data
    );
    setSuccess(!response.isError);
    setLoading(false);
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [filter, page, searchParams]);

  return {
    perPage,
    page,
    totalForum,
    loading,
    success,
    setFilter,
    data,
    nextPage,
    setPage,
    isHasNextPage,
    isHasPrevPage,
    previousPage,
    createForum,
    hasPage,
    remove,
    fetchData,
  };
}

import { useEffect, useState } from 'react';
import { IForum } from '../types/forum';
import { endpoints } from '../utils/endpoint';
import Service from '../utils/service';
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

  const fetchData = async () => {
    setLoading(true);
    const service = new Service();
    if (filter === FORUM_FILTER.Top) {
      const response = await service.request(endpoints.forumNewest);
      setData(response.data.forums);
      setSuccess(!response.isError);
    } else if (filter === FORUM_FILTER.Newest) {
      const response = await service.request(endpoints.forumTop);
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
  }, [filter]);

  return { loading, success, setFilter, data, createForum };
}

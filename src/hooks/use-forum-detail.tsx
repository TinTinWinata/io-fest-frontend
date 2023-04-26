import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IForum } from '../types/forum';
import { endpoints } from '../utils/endpoint';
import Service from '../utils/service';
import { toastError } from '../utils/toast';
import { useUserAuth } from './user-context';

export default function useForumDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const [data, setData] = useState<IForum>();
  const { user, isAuth } = useUserAuth();

  const createComment = async (comment: string) => {
    if (!isAuth() || data === undefined) {
      return;
    }
    const service = new Service(user.token);
    const formData = {
      forumId: data.id,
      comment,
    };
    const response = await service.request(
      endpoints.commentCreate,
      undefined,
      formData
    );
    if (response.isError) {
      toastError(response.data);
    }
    // If succesfully create comment then re-fetch the comment
    if (id) fetchId(id);
  };

  const fetchId = async (id: string) => {
    const service = new Service();
    const response = await service.request(endpoints.forumId, id);
    if (!response.isError) setData(response.data.forum);
    setSuccess(!response.isError);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchId(id);
    }
  }, [id]);
  return { loading, success, data, createComment };
}

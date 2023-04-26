import { useEffect, useState } from 'react';
import { IUserFilterContainer } from '../types/user';
import { endpoints } from '../utils/endpoint';
import Service from '../utils/service';

export default function useAdmin(token: string) {
  const [data, setData] = useState<IUserFilterContainer>({
    admins: [],
    doctors: [],
    members: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const fetch = async () => {
    setLoading(true);
    const service = new Service(token);
    const response = await service.request(endpoints.adminPage);
    setSuccess(!response.isError);
    if (!response.isError) setData(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);
  return { data };
}

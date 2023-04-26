import { useEffect, useState } from 'react';
import { endpoints } from '../utils/endpoint';
import Service from '../utils/service';

export default function useAdmin(token: string) {
  const [data, setData] = useState<any>();
  const fetch = async () => {
    const service = new Service(token);
    const response = await service.request(endpoints.adminPage);
    console.log('response : ', response);
  };
  useEffect(() => {
    fetch();
  }, []);
  return { data };
}

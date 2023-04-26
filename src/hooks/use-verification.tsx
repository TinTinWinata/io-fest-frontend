import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { endpoints } from '../utils/endpoint';
import Service from '../utils/service';

export default function useVerification() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  const handleId = async (id: string) => {
    const service = new Service();
    const data = {
      activationLinkId: id,
    };
    const response = await service.request(
      endpoints.verification,
      undefined,
      data
    );
    setSuccess(!response.isError);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      handleId(id);
    }
  }, []);
  return { loading, success };
}

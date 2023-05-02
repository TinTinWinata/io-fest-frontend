import { useEffect, useState } from 'react';
import { IAiResponse } from '../types/ai';
import { IFormAnswer } from '../types/form-answer';
import { endpoints } from '../utils/endpoint';
import Service, { ContentType } from '../utils/service';
import { toastError } from '../utils/toast';

interface IResultType {
  [key: string]: number;
}

export default function UseDiabetics(answers: IFormAnswer[]) {
  const [data, setData] = useState<IAiResponse>();

  const dataConverter = (answers: IFormAnswer[]) => {
    return answers.reduce((acc: IResultType, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});
  };

  const fetch = async () => {
    const data = dataConverter(answers);
    // console.log('data : ', data);
    const service = new Service(undefined, ContentType.JSON, true);
    const response = await service.request(
      endpoints.diabetics,
      undefined,
      data
    );
    if (response.isError) {
      toastError(response.data);
    } else {
      setData(response.data);
    }
  };

  useEffect(() => {
    if (answers.length > 0) {
      fetch();
    }
  }, [answers]);

  return { data };
}

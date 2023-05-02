import { useState } from 'react';

export default function useRemember() {
  const LOCAL_STORAGE_KEY = 'REMEMBER_ME';

  const getFromStorage = (): string => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    return value === null ? '' : value;
  };

  const setData = (value: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, value);
    setDataDispatch(value);
  };

  const [data, setDataDispatch] = useState<string>(getFromStorage());
  return { data, setData };
}

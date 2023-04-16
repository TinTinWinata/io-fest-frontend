import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILoginForm, IRegisterForm } from '../types/auth';
import { IChildrenOnly } from '../types/children-only';
import { IUser } from '../types/user';
import { endpoints } from '../utils/endpoint';
import Service from '../utils/service';
import { toastError, toastSuccess } from '../utils/toast';

const userContext = createContext({} as any);
const USER_LOCAL_STORAGE_KEY = 'USER';

export function UserProvider({ children }: IChildrenOnly) {
  const [user, setUser] = useState<IUser>();

  const navigate = useNavigate();

  async function login(data: ILoginForm) {
    const service = new Service();
    const response = await service.request(endpoints.login, undefined, data);
    if (!response.isError) {
      toastSuccess('Succesfully logged in!');
      setUser(response.data.user);
      navigate('/home');
    } else toastError('Authentication failed!');
    return response;
  }

  async function register(data: IRegisterForm) {
    const service = new Service();
    const response = await service.request(endpoints.register, undefined, data);
    if (!response.isError) {
      toastSuccess('Succesfully register an account!');
      navigate('/login');
    } else toastError('Failed to register the account!');
  }

  function isAuth() {
    return user !== undefined && user !== null;
  }

  const data = { isAuth, login, register };

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export function useUserAuth() {
  return useContext(userContext);
}

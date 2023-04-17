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
const DEFAULT_USER: IUser = {
  email: 'guest@gmail.com',
  isActive: false,
  name: 'guest',
  password: 'guest',
  username: 'guest',
  id: 'guest',
  imageUrl: 'https://picsum.photos/200',
  role: 'guest',
};

export function UserProvider({ children }: IChildrenOnly) {
  const [user, setUserState] = useState<IUser>(getFromStorage());

  const navigate = useNavigate();

  function setUser(user: IUser) {
    setUserState(user);
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
  }

  function getFromStorage(): IUser {
    const userString = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    if (userString) {
      const userObject = JSON.parse(userString) as IUser;
      return userObject;
    }
    return DEFAULT_USER;
  }

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
    console.log(user !== DEFAULT_USER);
    return user !== DEFAULT_USER;
  }

  const data = { isAuth, login, register };

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export function useUserAuth() {
  return useContext(userContext);
}

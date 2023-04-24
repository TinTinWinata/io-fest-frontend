import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Id } from 'react-toastify';
import { ILoginForm, IRegisterForm } from '../types/auth';
import { IChildrenOnly } from '../types/children-only';
import { EXAMPLE_USER, IUser } from '../types/user';
import { endpoints } from '../utils/endpoint';
import { displayError } from '../utils/helper';
import Service from '../utils/service';
import {
  toastLoading,
  toastUpdateFailed,
  toastUpdateSuccess,
} from '../utils/toast';

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

  // !Debugging Purpose
  // useEffect(() => {
  // console.log('user : ', user);
  // }, [user]);

  const navigate = useNavigate();

  function setUser(user: IUser) {
    setUserState(user);
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
  }

  function getFromStorage(): IUser {
    const userString = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    if (userString && userString !== '') {
      const userObject = JSON.parse(userString) as IUser;
      return userObject;
    }
    return DEFAULT_USER;
  }

  function responseConverter(response: any): IUser {
    const user: IUser = response.data.user;
    user.token = response.data.accessToken;
    return user;
  }

  async function login(data: ILoginForm) {
    const id: Id = toastLoading('Loading');
    const service = new Service();
    const response = await service.request(endpoints.login, undefined, data);
    if (!response.isError) {
      toastUpdateSuccess(id, 'Succesfully logged in!');
      setUser(responseConverter(response));
      navigate('/home');
    } else {
      if (response.data) displayError(response.data);
      toastUpdateFailed(id, 'Failed Authentication!');
    }
    return response;
  }

  async function register(data: IRegisterForm): Promise<boolean> {
    const service = new Service();
    const id: Id = toastLoading('Loading');
    const response = await service.request(endpoints.register, undefined, data);
    if (!response.isError) {
      toastUpdateSuccess(id, 'Succesfully register an account!');
      return true;
    } else {
      if (response.data) displayError(response.data);
      toastUpdateFailed(id, 'Failed to register an new account!');
    }

    return false;
  }

  function logout() {
    const id: Id = toastLoading('Loading');
    const tempUser = user;
    setUser(EXAMPLE_USER);
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, '');
    toastUpdateSuccess(id, `Succesfully log out! Good Bye ${tempUser.name}!`);
    navigate('/');
  }

  function isAuth() {
    return user !== DEFAULT_USER;
  }

  const data = { isAuth, login, register, user, logout };

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export function useUserAuth() {
  return useContext(userContext);
}

import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Id } from 'react-toastify';
import { ILoginForm, IRegisterForm } from '../types/auth';
import { IChildrenOnly } from '../types/children-only';
import { EXAMPLE_USER, IUser } from '../types/user';
import { endpoints } from '../utils/endpoint';
import { displayError } from '../utils/helper';
import { ROLE } from '../utils/role';
import Service, { ContentType } from '../utils/service';
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
  profilePicture: 'https://picsum.photos/200',
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

  function responseAdapter(response: any): IUser {
    const user: IUser = response.data.user;
    user.token = response.data.accessToken;
    return user;
  }

  function updateUser(updatedUser: IUser) {
    const newUser: IUser = { ...user, ...updatedUser };
    setUser(newUser);
  }

  async function refetch() {
    if (user.id) {
      const service = new Service(user.token);
      const response = await service.request(endpoints.fetch, undefined);
      if (!response.isError) updateUser(response.data);
    }
  }

  async function login(data: ILoginForm) {
    const id: Id = toastLoading('Loading');
    const service = new Service();
    const response = await service.request(endpoints.login, undefined, data);
    if (!response.isError) {
      toastUpdateSuccess(id, 'Succesfully logged in!');
      setUser(responseAdapter(response));
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

  function setUserData(name: string, username: string) {
    const updatedUser = user;
    updatedUser.name = name;
    updatedUser.username = username;
    setUser(updatedUser);
  }

  async function changeProfilePicture(e: File) {
    const id: Id = toastLoading(
      'Please wait were changing youre profile picture'
    );
    const formData = new FormData();
    formData.append('profilePicture', e);
    const service = new Service(user.token, ContentType.MULTIPART);
    const response = await service.request(
      endpoints.updateProfilePicture,
      undefined,
      formData
    );
    if (response.isError) {
      toastUpdateFailed(
        id,
        'Failed to update your profile picture, please try again later!'
      );
    } else {
      await refetch();
      toastUpdateSuccess(id, 'Succesfully change your profile picture!');
    }
  }

  async function updateUserData(name: string, username: string) {
    setUserData(name, username);
    await update();
  }

  async function update() {
    const id = toastLoading('Please wait were updating youre profile');
    const service = new Service(user.token);
    const response = await service.request(
      endpoints.updateProfile,
      undefined,
      user
    );
    if (response.isError) {
      toastUpdateFailed(
        id,
        'Failed to update your profile, please try again later!'
      );
      if (response.data) displayError(response.data);
    } else {
      await refetch();
      toastUpdateSuccess(id, 'Succesfully change your profile!');
    }
  }

  const loginGoogle = async (token: string) => {
    const service = new Service();
    const id = toastLoading('Wait the system check in on you');
    const response = await service.request(endpoints.googleLogin, undefined, {
      token: token,
    });
    if (response.isError) {
      toastUpdateFailed(
        id,
        'Failed to login your profile, please try again later!'
      );
      displayError([response.data]);
    } else {
      toastUpdateSuccess(id, 'Succesfully login to your account, Welcome!');
      setUser(responseAdapter(response));
      navigate('/home');
    }
  };

  function isAuth() {
    return user !== DEFAULT_USER;
  }

  function isDoctor() {
    return isAuth() && user.role === ROLE.doctor;
  }

  const data = {
    isAuth,
    login,
    register,
    user,
    logout,
    changeProfilePicture,
    updateUserData,
    isDoctor,
    loginGoogle,
  };

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export function useUserAuth() {
  return useContext(userContext);
}

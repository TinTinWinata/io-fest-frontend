import { createContext, useContext, useState } from 'react';
import { ILoginForm, IRegisterForm } from '../types/auth';
import { IChildrenOnly } from '../types/children-only';
import { endpoints } from '../utils/endpoint';
import Service from '../utils/service';

const userContext = createContext({} as any);

export function UserProvider({ children }: IChildrenOnly) {
  const [auth, setAuth] = useState(false);

  async function login(data: ILoginForm) {
    const service = new Service();
    const response = await service.request(endpoints.login);
  }

  async function register(data: IRegisterForm) {
    const service = new Service();
    const response = await service.request(endpoints.register, undefined, data);
  }

  function isAuth() {
    return auth;
  }

  const data = { setAuth, auth, isAuth, login, register };

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export function useUserAuth() {
  return useContext(userContext);
}

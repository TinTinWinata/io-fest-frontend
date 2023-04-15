import { createContext, useContext, useState } from 'react';
import { IChildrenOnly } from '../types/children-only';

const userContext = createContext({} as any);

export function UserProvider({ children }: IChildrenOnly) {
  const [auth, setAuth] = useState(false);

  // Authenticate logic here VVV
  function isAuth() {
    return auth;
  }

  // You can pass all user data in here V (Global Data)
  const data = { setAuth, auth, isAuth };

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export function useUserAuth() {
  return useContext(userContext);
}

import { createContext, useContext, useState } from "react";

const userContext = createContext({} as any);

type ContentLayout = {
  children: JSX.Element;
};

export function UserProvider({ children }: ContentLayout) {
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

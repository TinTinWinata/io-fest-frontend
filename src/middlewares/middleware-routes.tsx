import { Route, Routes } from 'react-router-dom';
import { useUserAuth } from '../hooks/user-context';
import NotFoundPage from '../pages/404/404';
import Profile from '../pages/profile/profile';
import MiddlewareAdminRoutes from './middleware-admin-routes';

export default function MiddlewareRoutes() {
  // Passing User Auth From (UserContext.tsx)

  const { isAuth } = useUserAuth();

  if (!isAuth()) {
    return <NotFoundPage />;
  }

  return (
    <Routes>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/*" element={<MiddlewareAdminRoutes />}></Route>
    </Routes>
  );
}

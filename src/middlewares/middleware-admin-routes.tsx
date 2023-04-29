import { Route, Routes } from 'react-router-dom';
import { useUserAuth } from '../hooks/user-context';
import NotFoundPage from '../pages/404/404';
import Admin from '../pages/admin/admin';
import { ROLE } from '../utils/role';

export default function MiddlewareAdminRoutes() {
  const { isAuth, user } = useUserAuth();

  if (!isAuth() || user.role !== ROLE.admin) {
    return <NotFoundPage />;
  }

  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

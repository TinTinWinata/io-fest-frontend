import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../hooks/user-context';
import Detail from '../pages/detail';

export default function MiddlewareRoutes() {
  const navigate = useNavigate();

  // Passing User Auth From (UserContext.tsx)
  const { isAuth } = useUserAuth();

  useEffect(() => {
    if (!isAuth()) {
      // If not auth then go to '/' (login page at routes)
      navigate('/');
    }

    // --------------------------------
  }, []);

  return (
    <Routes>
      <Route path="/detail" element={<Detail></Detail>}></Route>
    </Routes>
  );
}

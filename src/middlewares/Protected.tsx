import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../hooks/user-context';

type ContentLayout = {
  children: React.ReactElement;
};

export default function Protected({ children }: ContentLayout) {
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

  return children;
}

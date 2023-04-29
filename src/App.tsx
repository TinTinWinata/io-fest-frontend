import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './hooks/theme-context';
import { UserProvider } from './hooks/user-context';
import MainLayout from './layouts/layout';
import MiddlewareRoutes from './middlewares/middleware-routes';
import { default as Home } from './pages/home/home';
import Landing from './pages/landing/landing';
import Login from './pages/login';
import Register from './pages/register/register';

import { GoogleOAuthProvider } from '@react-oauth/google';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import Detail from './pages/detail/detail';
import Diabetes from './pages/form/diabetes';
import Verification from './pages/verification/verification';

function App() {
  const handleCallback = () => {};

  useEffect(() => {
    // Initiate AOS
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      {/* Toast container */}
      <ToastContainer />
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <ThemeProvider>
          {/* Bundled with User Provider for getting user context (UserContext.tsx) */}
          <UserProvider>
            {/* Bundled with Main Layout (layout.tsx) */}
            <MainLayout>
              <Routes>
                {/* All Routes [Login] (no need authenticate routes) (login.tsx) */}
                <Route path="/" element={<Landing />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
                <Route path="/form" element={<Diabetes />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                  path="/activation/:id"
                  element={<Verification />}
                ></Route>

                <Route
                  path="/*"
                  element={<MiddlewareRoutes></MiddlewareRoutes>}
                ></Route>
              </Routes>
            </MainLayout>
          </UserProvider>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;

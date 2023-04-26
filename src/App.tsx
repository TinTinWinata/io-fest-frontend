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

import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import Admin from './pages/admin/admin';
import Detail from './pages/detail/detail';
import Diabetes from './pages/form/diabetes';
import Profile from './pages/profile/profile';
import Verification from './pages/verification/verification';

function App() {
  const handleCallback = () => {};

  useEffect(() => {
    // Initiate AOS
    AOS.init();
    AOS.refresh();

    // // Initiate Google (for linter)
    google.accounts.id.initalize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCallback,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <BrowserRouter>
      {/* Toast container */}
      <ToastContainer />
      <ThemeProvider>
        <div className="" id="signInDiv"></div>
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
              <Route path="/activation/:id" element={<Verification />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/profile" element={<Profile />}></Route>

              {/* First Authentication Method Using Authenticate Routes VVV */}
              {/* 
            <Route
            path="/detail"
            element={
              <Protected>
                  <Detail></Detail>
                </Protected>
              }
            ></Route> */}

              {/* ----------------------------------------------------------- */}

              {/* Second Authentication Method Using Middleware Routes VVV (Cleanest)  */}

              <Route
                path="/*"
                element={<MiddlewareRoutes></MiddlewareRoutes>}
              ></Route>

              {/* ---------------------------------------------------------- */}
            </Routes>
          </MainLayout>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

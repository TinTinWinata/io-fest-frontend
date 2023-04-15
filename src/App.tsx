import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './hooks/theme-context';
import { UserProvider } from './hooks/user-context';
import MainLayout from './layouts/layout';
import MiddlewareRoutes from './middlewares/middleware-routes';
import { default as Home } from './pages/home/home';
import Landing from './pages/landing/landing';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        {/* Bundled with User Provider for getting user context (UserContext.tsx) */}
        <UserProvider>
          {/* Bundled with Main Layout (layout.tsx) */}
          <MainLayout>
            <Routes>
              {/* All Routes [Login] (no need authenticate routes) (login.tsx) */}
              <Route path="/" element={<Landing></Landing>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>

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

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './hooks/UserContext';
import MainLayout from './layouts/layout';
import MiddlewareRoutes from './middlewares/MiddlewareRoutes';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      {/* Bundled with User Provider for getting user context (UserContext.tsx) */}
      <UserProvider>
        {/* Bundled with Main Layout (layout.tsx) */}
        <MainLayout>
          <Routes>
            {/* All Routes [Login] (no need authenticate routes) (login.tsx) */}
            <Route path="/" element={<Login></Login>}></Route>
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
    </BrowserRouter>
  );
}

export default App;

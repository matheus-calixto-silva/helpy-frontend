import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '@app/contexts/AuthProvider/AuthProvider';
import Login from '@views/components/Login/Login';
import NotFound from '@views/components/NotFound/NotFound';
import ProtectedRoute from '@views/components/ProtectedRoute/ProtectedRoute';
import Home from '@views/pages/Home/Home';

import LoggedUser from './loggedUser';
import { defaultRoutes } from './routes';

const Router = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route
          path={defaultRoutes.account}
          element={
            <ProtectedRoute>
              <LoggedUser />
            </ProtectedRoute>
          }
        />
        <Route path={defaultRoutes.home} element={<Home />} />
        <Route path={defaultRoutes.login} element={<Login />} />
        <Route path={defaultRoutes.notfound} element={<NotFound />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default Router;

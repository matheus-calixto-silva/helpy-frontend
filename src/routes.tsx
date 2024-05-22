import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '@app/contexts/AuthProvider/AuthProvider';
import Login from '@views/components/Login/Login';
import NotFound from '@views/components/NotFound/NotFound';
import ProtectedRoute from '@views/components/ProtectedRoute/ProtectedRoute';
import User from '@views/components/User/User';
import Home from '@views/pages/Home/Home';

const AppRoutes = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route
          path="/conta/*"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default AppRoutes;

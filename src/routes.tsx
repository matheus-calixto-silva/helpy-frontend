import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import User from './components/User/User';
import { AuthProvider } from './contexts/AuthProvider/AuthProvider';
import Home from './pages/Home/Home';

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

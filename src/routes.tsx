import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { AuthProvider } from './contexts/AuthProvider/AuthProvider';

import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import User from './components/User/User';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<ProtectedRoute><User /></ProtectedRoute>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;

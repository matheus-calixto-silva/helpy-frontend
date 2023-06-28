import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

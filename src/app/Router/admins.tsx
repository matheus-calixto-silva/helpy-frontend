import { Route, Routes } from 'react-router-dom';

import Admin from '@views/components/Admin/Admin';

import { adminRoutes } from './routes';

const AdminRoutes = () => (
  <Routes>
    <Route path={adminRoutes.adminIndex} element={<Admin />} />
    <Route path={adminRoutes.skills} element={<Admin />} />
    <Route path={adminRoutes.createSkill} element={<Admin />} />
    <Route path={adminRoutes.skillById} element={<Admin />} />
    <Route path={adminRoutes.editSkill} element={<Admin />} />
    <Route path={adminRoutes.categories} element={<Admin />} />
    <Route path={adminRoutes.createCategory} element={<Admin />} />
    <Route path={adminRoutes.categoryById} element={<Admin />} />
    <Route path={adminRoutes.editCategory} element={<Admin />} />
    <Route path={adminRoutes.volunteers} element={<Admin />} />
    <Route path={adminRoutes.volunteerById} element={<Admin />} />
    <Route path={adminRoutes.editVolunteer} element={<Admin />} />
    <Route path={adminRoutes.ongs} element={<Admin />} />
    <Route path={adminRoutes.ongById} element={<Admin />} />
    <Route path={adminRoutes.editOng} element={<Admin />} />
  </Routes>
);

export default AdminRoutes;

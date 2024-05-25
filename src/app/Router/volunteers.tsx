/* eslint-disable import/prefer-default-export */
import { Route, Routes } from 'react-router-dom';

import Volunteer from '@views/components/Volunteer/Volunteer';
import VolunteerEventDetails from '@views/components/VolunteerEventDetails/VolunteerEventDetails';

import { volunteerRoutes } from './routes';

const VolunteerRoutes = () => (
  <Routes>
    <Route path={volunteerRoutes.volunteerIndex} element={<Volunteer />} />
    {/* <Route path='/meus-eventos' element={<MyEvents />} /> */}
    <Route
      path={volunteerRoutes.eventById}
      element={<VolunteerEventDetails />}
    />
  </Routes>
);
export default VolunteerRoutes;

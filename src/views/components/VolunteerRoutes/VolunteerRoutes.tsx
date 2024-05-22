import { Route, Routes } from 'react-router-dom';

// import MyEvents from '../MyEvents/MyEvents';
import NotFound from '../NotFound/NotFound';
import Volunteer from '../Volunteer/Volunteer';
import VolunteerEventDetails from '../VolunteerEventDetails/VolunteerEventDetails';

const OngRoutes = () => (
  <Routes>
    <Route path="/" element={<Volunteer />} />
    {/* <Route path='/meus-eventos' element={<MyEvents />} /> */}
    <Route
      path="/evento-detalhes/:eventId"
      element={<VolunteerEventDetails />}
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default OngRoutes;

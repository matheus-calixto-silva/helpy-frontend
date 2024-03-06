import { Route, Routes } from 'react-router-dom';
import VolunteerEventDetails from '../VolunteerEventDetails/VolunteerEventDetails';
// import MyEvents from '../MyEvents/MyEvents';
import NotFound from '../NotFound/NotFound';
import Volunteer from '../Volunteer/Volunteer';

const OngRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Volunteer />} />
      {/* <Route path='/meus-eventos' element={<MyEvents />} /> */}
      <Route path='/evento-detalhes/:eventId' element={<VolunteerEventDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default OngRoutes;
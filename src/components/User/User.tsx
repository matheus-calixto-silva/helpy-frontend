import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider/useAuth';

import UserNavBar from '../UserNavBar/UserNavBar';

import Admin from '../Admin/Admin';
import Ong from '../Ong/Ong';
import Volunteer from '../Volunteer/Volunteer';
import NotFound from '../NotFound/NotFound';
import MyEvents from '../MyEvents/MyEvents';
import CreateEvent from '../CreateEvent/CreateEvent';
import EventDetails from '../EventDetails/EventDetails';

const Profile = () => {
  const auth = useAuth();
  return (
    <section>
      <UserNavBar />
      {auth.role === 'user' && <Volunteer />}
      {auth.role === 'ong' && (
        <Routes>
          <Route path='/' element={<Ong />} />
          <Route path='/criar-evento' element={<CreateEvent />} />
          <Route path='/meus-eventos' element={<MyEvents />} />
          <Route path='/meus-eventos/:eventId' element={<EventDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      )}
      {auth.role === 'admin' && <Admin />}
    </section>
  );
};

export default Profile;
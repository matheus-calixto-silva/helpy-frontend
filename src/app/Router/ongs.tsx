import { Route, Routes } from 'react-router-dom';

import EventDetails from '@views/components/EventDetails/EventDetails';
import EventForm from '@views/components/EventForm/EventForm';
import MyEvents from '@views/components/MyEvents/MyEvents';
import Ong from '@views/components/Ong/Ong';

import { ongRoutes } from './routes';

const OngRoutes = () => (
  <Routes>
    <Route path={ongRoutes.ongIndex} element={<Ong />} />
    <Route path={ongRoutes.createEvent} element={<EventForm />} />
    <Route path={ongRoutes.editEvent} element={<EventForm />} />
    <Route path={ongRoutes.registeredEvents} element={<MyEvents />} />
    <Route path={ongRoutes.eventById} element={<EventDetails />} />
  </Routes>
);

export default OngRoutes;

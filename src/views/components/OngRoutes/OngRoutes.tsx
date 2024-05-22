import { Route, Routes } from 'react-router-dom';

import EventDetails from '../EventDetails/EventDetails';
import EventForm from '../EventForm/EventForm';
import MyEvents from '../MyEvents/MyEvents';
import NotFound from '../NotFound/NotFound';
import Ong from '../Ong/Ong';

const OngRoutes = () => (
  <Routes>
    <Route path="/" element={<Ong />} />
    <Route path="/criar-evento" element={<EventForm />} />
    <Route path="/editar-evento/:eventId" element={<EventForm />} />
    <Route path="/meus-eventos" element={<MyEvents />} />
    <Route path="/meus-eventos/:eventId" element={<EventDetails />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default OngRoutes;

import { useState, useEffect, useRef } from 'react';

import { useAuth } from '../../contexts/AuthProvider/useAuth';
import ongService from '../../services/ongs';
import userService from '../../services/users';
import { Event } from '../../types';
import AvaliableEvents from '../AvaliableEvents/AvaliableEvents';

import styles from './Volunteer.module.css';

const Volunteer = () => {
  const { id, role } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);

  const fetchData = async () => {
    try {
      const response =
        id && role === 'ong'
          ? await ongService.getEventsByOng(id)
          : await userService.getAllEvents();
      setEvents(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      <AvaliableEvents events={events} />
    </section>
  );
};

export default Volunteer;

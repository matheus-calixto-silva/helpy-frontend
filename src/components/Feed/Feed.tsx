import { useState, useEffect } from 'react';

import { useAuth } from '../../contexts/AuthProvider/useAuth';

import userService from '../../services/users';
import ongService from '../../services/ongs';

import { Event } from '../../types';

import styles from './Feed.module.css';

const Feed = () => {
  const { id, role } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);

  const fetchData = async () => {
    try {
      const response = id && role === 'ong' ? await ongService.getEventsByOng(id) : await userService.getAllEvents();
      setEvents(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={styles.feed_container}>
      {events ? events.map((event) => (
        <div className={styles.event} key={event._id}>
          {event.name}
        </div>
      )) : 'nenhum evento encontrado'}
    </section>
  );
};

export default Feed;
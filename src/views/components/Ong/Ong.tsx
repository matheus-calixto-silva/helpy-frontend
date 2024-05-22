import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@app/contexts/AuthProvider/useAuth';
import ongService from '@app/services/ongs';

import { IEvent } from '../../../types';

import styles from './Ong.module.css';

const Ong = () => {
  const { id, role } = useAuth();
  const [events, setEvents] = useState<IEvent[]>();
  const [event, setEvent] = useState<IEvent>();
  let totalVolunteers = 0;

  const countAllEventVolunteers = (events: IEvent[]) => {
    events.map((event) => (totalVolunteers += event?.volunteers.length));
  };

  const fetchData = async () => {
    const response =
      id && role === 'ong' && (await ongService.getEventsByOng(id));
    setEvents(response);
    if (response && response.length > 0) {
      const currentDate = new Date();
      let closestEvent = response[0];

      countAllEventVolunteers(response);

      response.map((event: IEvent) => {
        const eventDate = new Date(event.date);
        if (eventDate >= currentDate) {
          closestEvent = event;
        }
      });

      setEvent(closestEvent);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.side_data}>
          <div className={styles.side_data_item}>
            <h5>Total de eventos</h5>
            <p>{events?.length}</p>
          </div>
          <div className={styles.side_data_item}>
            <h5>Total de voluntários</h5>
            <p>{totalVolunteers}</p>
          </div>
        </div>
        <div id="closestEventContainer">
          <h5>Próximo evento</h5>
          <div className={styles.bg_gradient}>
            <div
              className={styles.hero_image}
              style={{
                backgroundImage: `url(http://localhost:3001/uploads/${event?.eventPic})`,
              }}
            >
              <div className={styles.hero_text}>
                <Link to={`/conta/meus-eventos/${event?._id}`} className="">
                  <h4>{event?.name}</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ong;

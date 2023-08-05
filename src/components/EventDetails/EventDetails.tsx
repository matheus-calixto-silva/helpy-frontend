import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ongService from '../../services/ongs';

import { Event } from '../../types';

import styles from './EventDetails.module.css';

const EventDetails = () => {
  const [event, setEvent] = useState<Event>();
  const routeParams = useParams();
  const eventId = routeParams.eventId;

  useEffect(() => {
    (async () => {
      const event = await ongService.getEventById(eventId!);
      setEvent(event);
    })();
  }, []);

  function formateDate(date: Date) {
    const inputDate = new Date(date);
    const formattedDate = inputDate.toLocaleDateString('en-GB');

    return formattedDate;
  }

  return (
    <>
      {event && (
        <section className={styles.event}>
          <div className={styles.image_wrapper} style={{ backgroundImage: `url(http://localhost:3001/uploads/${event.eventPic})` }}></div>
          <div className={styles.info}>
            <h2>{event.name}</h2>
            <h6>{formateDate(event.date)}</h6>
            <p className={`b3 ${styles.description}`}>{event.description}</p>
            <div className={styles.skills}>
              <h6>Habilidades necessárias</h6>
              <ul className='b3'>
                {event.requiredSkills.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.options}>
              <button className={styles.button_edit}>Editar</button>
              <button className={styles.button_delete}>Excluir</button>
            </div>
          </div>
        </section>
      )
      }
    </>
  );
};

export default EventDetails;
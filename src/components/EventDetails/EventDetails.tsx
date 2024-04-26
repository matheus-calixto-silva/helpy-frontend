import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { navigate } from '../../libs/navigate';
import ongService from '../../services/ongs';
import { Event } from '../../types';

import styles from './EventDetails.module.css';

const EventDetails = () => {
  const [event, setEvent] = useState<Event>();
  const routeParams = useParams();
  const { eventId } = routeParams;
  const ong = JSON.parse(localStorage.getItem('user') || '');

  useEffect(() => {
    (async () => {
      const event = await ongService.getEventById(ong?.id, eventId!);
      setEvent(event);
    })();
  }, []);

  function formateDate(date: Date) {
    const inputDate = new Date(date);
    const formattedDate = inputDate.toLocaleDateString('en-GB');

    return formattedDate;
  }

  async function removeEvent(event: Event) {
    const confirm = window.confirm(
      `Você tem certeza que deseja excluir o evento:\n ${event.name}?`,
    );
    if (confirm && event._id) {
      await ongService.removeOngEvent(ong.id, event._id, 'delete');
      navigate('/conta/meus-eventos');
    } else {
      window.alert('Operação cancelada');
    }
  }

  return (
    <>
      {event && (
        <section className={styles.event}>
          <div
            className={styles.image_wrapper}
            style={{
              backgroundImage: `url(http://localhost:3001/uploads/${event.eventPic})`,
            }}
          />
          <div className={styles.info}>
            <h2>{event.name}</h2>
            <h6>{formateDate(event.date)}</h6>
            <p className={`b3 ${styles.description}`}>{event.description}</p>
            <div className={styles.skills}>
              <h6>Habilidades necessárias</h6>
              <ul className="b3">
                {event.requiredSkills.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.options}>
              <Link to={`/conta/editar-evento/${eventId}`}>
                <button className={styles.button_edit}>Editar</button>
              </Link>
              <button
                onClick={() => removeEvent(event)}
                className={styles.button_delete}
              >
                Excluir
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EventDetails;

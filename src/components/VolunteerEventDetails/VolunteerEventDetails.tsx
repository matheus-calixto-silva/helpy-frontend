import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useNavigation from '../../libs/navigate';
import userService from '../../services/users';
import { Event } from '../../types';

import styles from './VolunteerEventDetails.module.css';

const VolunteerEventDetails = () => {
  const [event, setEvent] = useState<Event>();
  const navigate = useNavigation();
  const routeParams = useParams();
  const { eventId } = routeParams;
  const volunteer = JSON.parse(localStorage.getItem('user') || '');

  useEffect(() => {
    (async () => {
      const event = await userService.getAvaliableEvent(eventId!);
      setEvent(event);
    })();
  }, []);

  function formateDate(date: Date) {
    const inputDate = new Date(date);
    const formattedDate = inputDate.toLocaleDateString('en-GB');

    return formattedDate;
  }

  async function registerVolunteer() {
    if (volunteer.token && volunteer.id && eventId) {
      await userService.joinEvent(volunteer.id, eventId);
      navigate('/conta');
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
            <div className={styles.skills}>
              <h6>Endereço</h6>
              <p className="b3">{event.address.street}</p>
              <p className="b3">
                {event.address.city} - {event.address.uf}
              </p>
            </div>
            <div className={styles.skills}>
              <h6>Voluntários</h6>
              {event.volunteers.length === 0 && (
                <p className="b3">Nenhum voluntário registrado</p>
              )}
              {event.volunteers.length > 0 && (
                <ul className="b3">
                  {event.volunteers.map((volunteer, index) => (
                    <li key={index}>
                      {volunteer.firstname} {volunteer.lastname}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.options}>
              <button
                onClick={() => registerVolunteer()}
                className={styles.button_delete}
              >
                Participar do Evento
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default VolunteerEventDetails;

import { Link } from 'react-router-dom';

import ClockIcon from '../../assets/clock - filled.svg';
import LocationIcon from '../../assets/location - filled.svg';
import { IEvent } from '../../types';

import styles from './AvaliableEventCard.module.css';

const AvaliableEventCard = ({ event }: { event: IEvent }) => {
  function formateDate(dateToFormat: Date) {
    const inputDate = new Date(dateToFormat);
    const formattedDate = inputDate.toLocaleDateString('en-GB');

    return formattedDate;
  }

  const { _id, name, date, address, eventPic } = event;
  const eventDate = new Date(date);
  const day = formateDate(eventDate).substring(0, 2);
  const month = eventDate
    .toLocaleDateString('pt-BR', {
      month: 'long',
    })
    .substring(0, 3)
    .toUpperCase();

  return (
    <div
      className={styles.social_card}
      style={{
        backgroundImage: `url(http://localhost:3001/uploads/${eventPic})`,
      }}
    >
      <div className={styles.social_card_content}>
        <div className={styles.social_card_data}>
          <p className={`b3 ${styles.card_data_day}`}>{day}</p>
          <p className={`b3 ${styles.card_data_day}`}>{month}</p>
        </div>
        <div className={styles.social_card_hour_location}>
          <img src={LocationIcon} alt="icone de gps" />
          <p className="b3">
            {address.city} - {address.uf}
          </p>
          <img src={ClockIcon} alt="icone de relógio" />
          <p className="b3">07:00</p>
        </div>
        <h6>{name}</h6>
        <Link to={`/conta/evento-detalhes/${_id}`} className="b3">
          Detalhes
        </Link>
      </div>
    </div>
  );
};

export default AvaliableEventCard;

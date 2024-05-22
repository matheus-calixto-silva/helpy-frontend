import EventTableList from '../EventTableList/EventTableList';

import styles from './MyEvents.module.css';

const MyEvents = () => (
  <section className={styles.my_events}>
    <h2>Meus Eventos</h2>
    <EventTableList />
  </section>
);

export default MyEvents;

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { IEvent } from '../../types';
import AvaliableEventCard from '../AvaliableEventCard/AvaliableEventCard';

import styles from './AvaliableEvents.module.css';

const AvaliableEvents = ({ events }: { events: IEvent[] }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [width]);

  return (
    <motion.section
      ref={carousel}
      className={styles.carousel}
      drag="x"
      whileTap={{ cursor: 'grabbing' }}
      dragConstraints={{ right: 0, left: -width }}
    >
      <motion.div className={styles.inner}>
        {events
          ? events.map((event) => (
              // eslint-disable-next-line no-underscore-dangle
              <AvaliableEventCard event={event} key={event._id} />
            ))
          : 'nenhum evento encontrado'}
      </motion.div>
    </motion.section>
  );
};

export default AvaliableEvents;

import { Link } from 'react-router-dom';

import bannerImage from '../../../../assets/home-banner.jpg';
import Button from '../../../../components/Button/Button';

import styles from './Banner.module.css';

const Banner = () => (
  <div
    className={styles.banner_section}
    style={{ backgroundImage: `url(${bannerImage})` }}
  >
    <div className={styles.banner_layer} />
    <div className={styles.banner_text}>
      <h1>Faça a diferença hoje</h1>
      <p className="b3">
        Faça o bem, transforme vidas e espalhe a bondade pelo mundo.
      </p>
      <Link to="/login">
        <Button>Participar</Button>
      </Link>
    </div>
  </div>
);

export default Banner;

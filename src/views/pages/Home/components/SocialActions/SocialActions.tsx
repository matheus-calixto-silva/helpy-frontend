import ClockIcon from '../../../../assets/clock - filled.svg';
import LocationIcon from '../../../../assets/location - filled.svg';
import Social1 from '../../../../assets/social-card-1.jpg';
import Social2 from '../../../../assets/social-card-2.jpg';
import Social3 from '../../../../assets/social-card-3.jpg';

import styles from './SocialActions.module.css';

const SocialActions = () => (
  <section className={styles.social}>
    <div className={styles.social_content}>
      <h3>Próximas ações</h3>
    </div>
    <div className={styles.social_grid}>
      <div
        className={styles.social_card}
        style={{ backgroundImage: `url(${Social1})` }}
      >
        <div className={styles.social_card_content}>
          <div className={styles.social_card_data}>
            <p className={`b3 ${styles.card_data_day}`}>11</p>
            <p className={`b3 ${styles.card_data_day}`}>JUL</p>
          </div>
          <div className={styles.social_card_hour_location}>
            <img src={LocationIcon} alt="icone de gps" />
            <p className="b3">Salvador - BA</p>
            <img src={ClockIcon} alt="icone de relógio" />
            <p className="b3">07:00</p>
          </div>
          <h6>Limpeza no lar de idosos.</h6>
          <a href="#" className="b3">
            Participe
          </a>
        </div>
      </div>
      <div
        className={styles.social_card}
        style={{ backgroundImage: `url(${Social2})` }}
      >
        <div className={styles.social_card_content}>
          <div className={styles.social_card_data}>
            <p className={`b3 ${styles.card_data_day}`}>23</p>
            <p className={`b3 ${styles.card_data_day}`}>AGO</p>
          </div>
          <div className={styles.social_card_hour_location}>
            <img src={LocationIcon} alt="icone de gps" />
            <p className="b3">Aracaju - SE</p>
            <img src={ClockIcon} alt="icone de relógio" />
            <p className="b3">17:00</p>
          </div>
          <h6>Entrega de mantimentos para moradores de rua.</h6>
          <a href="#" className="b3">
            Participe
          </a>
        </div>
      </div>
      <div
        className={styles.social_card}
        style={{ backgroundImage: `url(${Social3})` }}
      >
        <div className={styles.social_card_content}>
          <div className={styles.social_card_data}>
            <p className={`b3 ${styles.card_data_day}`}>27</p>
            <p className={`b3 ${styles.card_data_day}`}>SET</p>
          </div>
          <div className={styles.social_card_hour_location}>
            <img src={LocationIcon} alt="icone de gps" />
            <p className="b3">Recife - PE</p>
            <img src={ClockIcon} alt="icone de relógio" />
            <p className="b3">08:00</p>
          </div>
          <h6>Organização de doações para familias carentes</h6>
          <a href="#" className="b3">
            Participe
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SocialActions;

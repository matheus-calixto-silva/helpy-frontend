import HeroPhoto from '../../../../assets/charity-hero.png';

import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <section className={styles.container}>
      <div className={styles.hero_content}>
        <h2>Transforme vidas através de suas ações</h2>
        <p className="b1">
          Seja um agente de transformação e veja o poder das suas ações
        </p>
        <p className="b2">
          <a href="#">Saiba Mais</a>
        </p>
      </div>
      <div className={styles.hero_image_wrapper}>
        <img src={HeroPhoto} className={styles.hero_image} alt="Crianças" />
      </div>
    </section>
  </section>
);

export default Hero;

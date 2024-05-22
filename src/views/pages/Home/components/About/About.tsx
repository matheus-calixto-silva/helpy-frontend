import AboutPhoto from '../../../../assets/charity-about.png';

import styles from './About.module.css';

const About = () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.about_image_wrapper}>
          <img src={AboutPhoto} className={styles.about_image} alt="Crianças" />
        </div>
        <div className={styles.about_content}>
          <h2>Ambição em ajudar pessoas</h2>
          <p className="b2">
            Agimos com solidariedade e empatia, colocando o bem-estar das
            pessoas em primeiro lugar. Queremos deixar um legado de esperança,
            contribuindo para uma sociedade justa e inclusiva.
          </p>
          <p className="b2">
            <a href="#">Saiba Mais</a>
          </p>
        </div>
      </div>
      <div className={styles.background_red} />
    </div>
  </section>
);

export default About;

import styles from './About.module.css';

import AboutPhoto from '../../../../assets/charity-about.png';

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.about}>
        <div className={styles.about_image_wrapper}>
          <img src={AboutPhoto} className={styles.about_image} alt="Crianças" />
        </div>
        <div className={styles.about_content}>
          <h2>Ambição em ajudar pessoas</h2>
          <p className='b2'>Agimos com solidariedade e empatia, colocando o bem-estar das pessoas em primeiro lugar. Queremos deixar um legado de esperança, contribuindo para uma sociedade justa e inclusiva.</p>
          <p className='b2'><a href="#">Saiba Mais</a></p>
        </div>
      </section>
      <div className={styles.background_red}></div>
    </div>
  );
};

export default About;
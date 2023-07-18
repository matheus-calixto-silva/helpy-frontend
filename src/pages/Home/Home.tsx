import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import SocialActions from './components/SocialActions/SocialActions';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <About />
      <SocialActions />
      <Footer />
    </div>
  );
};

export default Home;
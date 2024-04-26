import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SocialActions from './components/SocialActions/SocialActions';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.home}>
    <Header />
    <Banner />
    <Hero />
    <About />
    <SocialActions />
    <Footer />
  </div>
);

export default Home;

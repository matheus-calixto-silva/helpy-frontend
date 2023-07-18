import styles from './Footer.module.css';

import Logo from '../../../../assets/logo-white.svg';
import TwitterLogo from '../../../../assets/logo-twitter-outlined.svg';
import InstagramLogo from '../../../../assets/logo-instagram-outlined.svg';
import FacebookLogo from '../../../../assets/logo-facebook-outlined.svg';

const Footer = () => {
  return (
    <footer className={`${styles.footer} b2`}>
      <div className={styles.footer_content}>
        <div className={styles.links}>
          <div className={styles.brand}>
            <img className={styles.logo} src={Logo} />
            <h4>Helpy</h4>
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <span className='b3'>Telefone</span>
            <p>555-423-7990</p>
          </div>
          <div className={styles.contact}>
            <span className='b3'>Email</span>
            <p>thehelpyproject@gmail.com</p>
          </div>
          <div className={styles.contact}>
            <span className='b3'>Social</span>
            <div className={styles.social}>
              <a href="#"><img className={styles.socialIcon} src={TwitterLogo} alt="Twitter" /></a>
              <a href="#"><img className={styles.socialIcon} src={InstagramLogo} alt="Instagram" /></a>
              <a href="#"><img className={styles.socialIcon} src={FacebookLogo} alt="Facebook" /></a>
            </div>
          </div>
        </div>
        <div className={styles.address}>
          <span className='b3'>Recife</span>
          <p>Cais do Apolo, 455 - Recife, PE, 50030-230</p>
        </div>
      </div>
      <div className={styles.copy}>
        <hr />
        <p className='b3'>© Helpy 2023 - Alguns direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

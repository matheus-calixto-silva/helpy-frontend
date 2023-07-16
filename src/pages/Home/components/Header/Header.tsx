import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';

import Logo from '../../../../assets/logo-red.svg';

import styles from './Header.module.css';

const HomeHeader = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <img className={styles.logo} src={Logo} alt="Helpy logo" />
      </div>
      <div className={styles.buttons}>
        <ButtonPrimary>Entrar</ButtonPrimary>
        <ButtonSecondary>Cadastre-se</ButtonSecondary>
      </div>
    </nav>
  );
};

export default HomeHeader;
import Logo from '../../../../assets/logo-white.svg';
import useNavigation from '../../../../libs/navigate';

import styles from './Header.module.css';

const HomeHeader = () => {
  const navigate = useNavigation();

  function handleClick() {
    navigate('/login');
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src={Logo} alt="Helpy logo" />
        </div>
        <div className={styles.buttons}>
          <button
            className={`b3 ${styles.button_primary}`}
            onClick={handleClick}
          >
            Entrar
          </button>
          <button className={`b3 ${styles.button_secondary}`}>
            Cadastre-se
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HomeHeader;

import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import styles from './NotFound.module.css';

const NotFound = () => (
  <div className={styles.not_found}>
    <h1>404</h1>
    <h4>Desculpe,página não encontrada</h4>
    <Link to="/home" className="b3">
      <Button>Voltar para Home</Button>
    </Link>
  </div>
);

export default NotFound;

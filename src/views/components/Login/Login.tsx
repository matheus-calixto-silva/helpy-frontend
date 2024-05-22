import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../app/contexts/AuthProvider/useAuth';
import useCheckMobileScreen from '../../app/hooks/useCheckMobileScreen';
import ArrowRed from '../../assets/arrow-left-red.svg';
import ArrowWhite from '../../assets/arrow-left-white.svg';
import LoginImg from '../../assets/login.jpg';
import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      auth.handleLogin(username, password);
    } catch (exception) {
      setTimeout(() => {
        console.log('credentials wrong');
      }, 5000);
    }
  };

  return (
    <section className={styles.login}>
      <div
        className={styles.image_wrapper}
        style={{ backgroundImage: `url(${LoginImg})` }}
      >
        <div className={styles.image_layer} />
      </div>
      <div className={styles.login_form}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          {/* Use the Input component here */}
          <Input
            label="Nome de usuário"
            type="text"
            name="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          {/* Use the Input component here */}
          <Input
            label="Senha"
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <div>
            <a href="#" className="b3">
              Esqueci minha senha
            </a>
          </div>
          <Button type="submit" id="login-button" className={styles.button}>
            Entrar
          </Button>
        </form>
        <div className={styles.cadastro}>
          <p className="b3">
            Ainda não possui conta?{' '}
            <a className={`b3 ${styles.button}`} href="/login/criar">
              cadastre - se
            </a>
          </p>
        </div>
      </div>
      {useCheckMobileScreen() ? (
        <Link className={styles.arrow} to="/home">
          <img src={ArrowRed} alt="icone de seta" />
        </Link>
      ) : (
        <Link className={styles.arrow} to="/home">
          <img src={ArrowWhite} alt="icone de seta" />
        </Link>
      )}
    </section>
  );
};

export default Login;

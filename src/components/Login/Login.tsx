import { FormEvent, useState } from 'react';

import styles from './Login.module.css';

import { useAuth } from '../../contexts/AuthProvider/useAuth';

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
    <div>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form} onSubmit={handleLogin}>
        <div>
          <input
            className={styles.input}
            id='username'
            placeholder='username'
            type='text'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            id='password'
            placeholder='password'
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit' id='login-button' className={styles.button}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
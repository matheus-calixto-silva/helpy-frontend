import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider/useAuth';

import userService from '../../services/users';
import ongService from '../../services/ongs';
import adminService from '../../services/admins';

import { User, Ong, Admin } from '../../types';

import styles from './UserNavBar.module.css';

import NavLogo from '../../assets/logo-red.svg';
import { Link } from 'react-router-dom';

type UserType = User | Ong | Admin;

const UserNavBar = () => {
  const [user, setUser] = useState<UserType>();
  const { id, role } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userData;
        if (id && role === 'user') {
          userData = await userService.getById(id);
        } else if (id && role === 'ong') {
          userData = await ongService.getById(id);
        } else if (id && role === 'admin') {
          userData = await adminService.getById(id);
        }
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [role]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={NavLogo} alt="Logo" />
      </div>
      <div className={styles.content}>
        {
          role === 'ong' &&
          (
            <nav>
              <ul>
                <li className='b3'>
                  <Link to={'/conta/meus-eventos'}>Meus Eventos</Link>
                </li>
                <li className='b3'>
                  <Link to='/conta/criar-evento'>Criar Evento</Link>
                </li>
              </ul>
            </nav>
          )
        }
        <div className={styles.profile}>
          {user && <img src={`http://localhost:3001/uploads/${user?.profilePic}`} alt="Foto de Perfil" />}
        </div>
      </div>
    </header>
  );
};

export default UserNavBar;
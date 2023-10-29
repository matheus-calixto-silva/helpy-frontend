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
  const { id, role, handleLogout } = useAuth();

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

  function openNav() {
    const sideNav = document.getElementById('mySidenav');
    if (sideNav) {
      sideNav.style.width = '250px';
    }
  }

  function closeNav() {
    const sideNav = document.getElementById('mySidenav');
    if (sideNav) {
      sideNav.style.width = '0';
    }
  }

  const NavBarLogo = () => {
    return (
      <div className={styles.logo}>
        <Link to='/conta'>
          <img src={NavLogo} alt="Logo" />
        </Link>
      </div>
    );
  };

  const NavBarOngsUrls = () => {
    return (
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
    );
  };

  const NavBarProfilePic = () => {
    return (
      <div className={styles.profile} onClick={openNav}>
        {user && <img src={`http://localhost:3001/uploads/${user?.profilePic}`} alt="Foto de Perfil" />}
      </div>
    );
  };

  const NavBarSideNav = () => {
    return (
      <div id="mySidenav" className={styles.sidenav}>
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <a>Meu Perfil</a>
        <a onClick={handleLogout}>Sair</a>
      </div>
    );
  };

  return (
    <>
      <header className={styles.header}>
        <NavBarLogo />
        <div className={styles.content}>
          {
            role === 'ong' && <NavBarOngsUrls />
          }
          <NavBarProfilePic />
        </div>
      </header>
      <NavBarSideNav />
    </>
  );
};

export default UserNavBar;
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@app/hooks/useAuth';
import adminService from '@app/services/admins';
import ongService from '@app/services/ongs';
import userService from '@app/services/users';

import { IAdmin, IOng, IUser } from '../../../types';
import NavLogo from '../../assets/logo-red.svg';

import styles from './UserNavBar.module.css';

type UserType = IUser | IOng | IAdmin;

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

  const NavBarLogo = () => (
    <div className={styles.logo}>
      <Link to="/conta">
        <img src={NavLogo} alt="Logo" />
      </Link>
    </div>
  );

  const NavBarOngsUrls = () => (
    <nav>
      <ul>
        <li className="b3">
          <Link to="/conta/meus-eventos">Meus Eventos</Link>
        </li>
        <li className="b3">
          <Link to="/conta/criar-evento">Criar Evento</Link>
        </li>
      </ul>
    </nav>
  );

  const NavBarProfilePic = () => (
    <div className={styles.profile} onClick={openNav}>
      {user && (
        <img
          src={`http://localhost:3001/uploads/${user?.profilePic}`}
          alt="Foto de Perfil"
        />
      )}
    </div>
  );

  const NavBarSideNav = () => (
    <div id="mySidenav" className={styles.sidenav}>
      <a className="closebtn" onClick={closeNav}>
        &times;
      </a>
      <a>Meu Perfil</a>
      <a onClick={handleLogout}>Sair</a>
    </div>
  );

  return (
    <>
      <header className={styles.header}>
        <NavBarLogo />
        <div className={styles.content}>
          {role === 'ong' && <NavBarOngsUrls />}
          <NavBarProfilePic />
        </div>
      </header>
      <NavBarSideNav />
    </>
  );
};

export default UserNavBar;

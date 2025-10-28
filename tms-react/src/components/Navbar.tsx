import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiTask } from 'react-icons/bi';
import styles from '../styles/Navbar.module.css';

const Navbar: FC = () => {
  const location = useLocation();
  
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <BiTask className={styles.brandIcon} />
          TMS
        </Link>
        
        <ul className={styles.menu}>
          <li>
            <Link 
              to="/" 
              className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/dashboard" 
              className={`${styles.link} ${location.pathname === '/dashboard' ? styles.active : ''}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className={`${styles.link} ${location.pathname === '/login' ? styles.active : ''}`}
            >
              Login
            </Link>
          </li>
          <li>
            <Link 
              to="/register" 
              className={`${styles.link} ${location.pathname === '/register' ? styles.active : ''}`}
            >
              Register
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`${styles.link} ${location.pathname === '/about' ? styles.active : ''}`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
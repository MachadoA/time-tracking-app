import { motion } from 'framer-motion';
import { useContext } from 'react';
import TimeContext from '../../../context/TimeContext';
import styles from './Nav.module.css';

const timeframes = ['daily', 'weekly', 'monthly'];

export default function Nav() {
  const {activeLink, setActiveLink} = useContext(TimeContext);

  const handleLinkClick = (timeframe) => {
    setActiveLink(timeframe);
  }

  return (
    <nav className={styles.nav}>
        <ul className={styles.navUl}>
          {timeframes.map(timeframe => (
            <li key={timeframe}>
              <motion.a
                whileFocus={{ scale: 1.2 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20
                }} 
                href="#" 
                className={`${styles.linkNav} ${activeLink === timeframe ? styles.active : ''}`}
                onClick={() => handleLinkClick(timeframe)}
              >
                {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
              </motion.a>
            </li>
          ))}
        </ul>
    </nav>
  )
}

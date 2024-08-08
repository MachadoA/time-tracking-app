import {motion} from 'framer-motion';
import styles from './Card.module.css';

export default function ItemCard({ item, activeLink }) {
  const { title, timeframes } = item;
  const titleClass = title.toLowerCase().replace(/ /g, '-');

  if (!timeframes[activeLink]) {
    return null;
  }

  const { current, previous } = timeframes[activeLink];

  return (
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        className={`${styles.sectionItem} ${styles[titleClass]}`}>
        <div className={`${styles[titleClass]} ${styles.headerItem} ${styles[`${titleClass}Img`]}`}>
        </div>
        <div className={styles.body}>
          <article className={styles.articleTitle}>
            <h2>{title}</h2>
            <button aria-label='toggle menu'>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
            </button>
          </article>
          <article className={styles.articleInformation}>
            <h2>{current} hrs</h2>
            <p>Last Week - {previous} hrs</p>
          </article>
        </div>
      </motion.div>
  );
}

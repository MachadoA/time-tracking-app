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
    <>
      <motion.section 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        className={styles.sectionItem}>
        <div className={styles[titleClass]}>
          <img src={`./images/icon-${title.toLowerCase().replace(/ /g, '-')}.svg`} alt={`icon of the ${title.toLowerCase()}`} />
        </div>
        <div className={styles.bodyInformation}>
          <article className={styles.articleTitle}>
            <h3>{title}</h3>
            <button>
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
      </motion.section>
    </>
  );
}

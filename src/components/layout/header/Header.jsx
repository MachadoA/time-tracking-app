import Nav from '../nav/Nav';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.dataPerson}>
          <img className={styles.avatar} src="./images/image-jeremy.png" alt="Jeremy Robson image" />
          <div className={styles.text}>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
      </div>
      <Nav />
    </header>
  )
}

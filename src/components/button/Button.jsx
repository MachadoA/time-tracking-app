import styles from './Button.module.css';

export default function Button({onClick, label}) {
  return (
    <button onClick={onClick} className={styles.btn}>{label} </button>
  )
}

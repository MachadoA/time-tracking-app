import React, { useContext } from 'react';
import TimeContext from '../../../context/TimeContext';
import data from '../../../../public/data.json';
import ItemCard from './ItemCard';
import styles from './Card.module.css';

export default function Card() {
  const { activeLink } = useContext(TimeContext);

  return (
    <main className={styles.main}>
      {data.map((item) => (
        <ItemCard key={item.title} item={item} activeLink={activeLink} />
      ))}
    </main>
  );
}

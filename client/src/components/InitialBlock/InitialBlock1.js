import React from 'react';
import styles from './InitialBlock1.module.scss';

const InitialBlock1 = ({image, title, actions})=> {
  return (
    <div className={styles.initial_block}>
      <img className={styles.image} src={image}/>
      <p className={styles.title}>{title}</p>
      <div className={styles.actions}>{actions}</div>
    </div>
  )
}

export default InitialBlock1;
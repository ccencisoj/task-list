import React from 'react';
import styles from './Logo1.module.scss';

const Logo1 = ({image, label})=> {
  return (
    <div className={styles.logo}>
      {image && <img className={styles.image} src={image}/>}
      {label && <p className={styles.label}>{label}</p>}
    </div>
  )
}

export default Logo1;
import React from 'react';
import styles from './BlockSection1.module.scss';

const BlockSection1 = ({children, title, actions})=> {
  return (
    <div className={styles.block_section}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <div className={styles.actions}>{actions}</div>
      </div>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  )
}

export default BlockSection1;
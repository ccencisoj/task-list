import React from 'react';
import styles from './ActionsRow.module.scss';

const ActionsRow = ({children})=> {
  return (
    <div className={styles.actions_row}>
      {children}
    </div>
  )
}

export default ActionsRow;
import React from 'react';
import styles from './ActionsColumn.module.scss';

const ActionsColumn = ({children})=> {
  return (
    <div className={styles.actions_column}>
      {children}
    </div>
  )
}

export default ActionsColumn;
import React from 'react';
import styles from './CenteredColumn.module.scss';

const CenteredColumn = ({children})=> {
  return (<div className={styles.centered_column}>{children}</div>)
}

export default CenteredColumn;
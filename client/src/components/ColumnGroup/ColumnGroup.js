import React from 'react';
import clsx from 'clsx';
import styles from './ColumnGroup.module.scss';

const ColumnGroup = ({
  children, 
  smallSeparation, 
  mediumSepration, 
  bigSeparation, 
  expand
})=> {
  const styles_column_group = clsx({
    [styles.column_group]: true,
    [styles.small_separation]: smallSeparation,
  });

  return (
    <div className={styles_column_group}>

    </div>
  )
}

export default ColumnGroup;
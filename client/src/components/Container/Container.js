import React from 'react';
import clsx from 'clsx';
import styles from './Container.module.scss';

const Container = ({
  children,
  maxContent,
  rowDirection,
  columnDirection,
  smallSeparation,
  mediumSeparation,
  bigSeparation
})=> {
  const styles_container = clsx({
    [styles.container]: true,
    [styles.max_content]: maxContent,
    [styles.row_direction]: rowDirection,
    [styles.column_direction]: columnDirection,
    [styles.small_separation]: smallSeparation,
    [styles.medium_separation]: mediumSeparation,
    [styles.big_separation]: bigSeparation
  });

  return (
    <div className={styles_container}>
      {children}
    </div>
  )
}

export default Container;
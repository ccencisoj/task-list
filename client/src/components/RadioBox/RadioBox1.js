import React from 'react';
import clsx from 'clsx';
import styles from './RadioBox1.module.scss';

const RadioBox1 = ({label, selected, onClick})=> {
  const styles_radio_box = clsx({
    [styles.radio_box]: true,
    [styles.selected]: selected,
    [styles.unselected]: !selected
  });

  return (
    <div className={styles_radio_box} onClick={onClick}>
      <div className={styles.circle}>
        <div className={styles.thumb}></div>
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  )
}

export default RadioBox1;
import React from 'react';
import clsx from 'clsx';
import styles from './BlockSection1.module.scss';
import { useViewport } from 'src/hooks/ViewportContext';

const BlockSection1 = ({children, title, actions})=> {
  const { isTabletWindow } = useViewport();

  const styles_block_section = clsx({
    [styles.block_section]: true,
    [styles.tablet]: isTabletWindow
  });

  return (
    <div className={styles_block_section}>
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
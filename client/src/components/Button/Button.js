import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import Loading1 from 'src/components/Loading/Loading1';

const Button = ({
  icon: Icon,
  label,
  type,
  primary,
  secondary,
  flex,
  expand,
  onClick,
  onHover,
  loading,
  small,
  big,
  transparentTheme,
  redTheme
})=> {
  const onlyIcon = Icon && !label;

  const styles_button = clsx({
    [styles.button]: true,
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.small]: small,
    [styles.big]: big,
    [styles.icon_button]: onlyIcon,
    [styles.small_icon_button]: small && onlyIcon,
    [styles.big_icon_button]: big && onlyIcon,
    [styles.flex]: flex,
    [styles.expand]: expand,
    [styles.transparent_theme]: transparentTheme,
    [styles.red_theme]: redTheme
  });

  return (
    <button type={type || "button"} className={styles_button} 
      onClick={onClick} onMouseMove={onHover}>
      {loading && <div className={styles.loading}><Loading1/></div>}
      {Icon && <Icon className={styles.icon}/>}
      {label && <p className={styles.label}>{label}</p>}
    </button>
  )
}

export default Button;
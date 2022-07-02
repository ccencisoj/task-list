import React from 'react';
import * as Icon from 'react-feather';
import Button from 'src/components/Button/Button';
import styles from './Navigation2.module.scss';

const Navigation2 = ({onBack})=> {
  return (
    <div className={styles.navigation}>
      <div className={styles.left}>
        <button className={styles.back_button} onClick={onBack}>
          <Icon.ArrowLeft className={styles.icon}/>
          <p className={styles.label}>Volver atras</p>
        </button>
      </div>
      <div className={styles.right}>
        <Button 
          small={true}
          label="Guardar"
          primary={true}
          onClick={onBack}/>
      </div>
    </div>
  )
}

export default Navigation2;
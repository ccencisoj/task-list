import React from 'react';
import Logo1 from 'src/components/Logo/Logo1';
import styles from './Navigation1.module.scss';
import { useUser } from 'src/hooks/UserContext';
import UserCard1 from 'src/components/UserCard/UserCard1';

const Navigation1 = ()=> {
  const user = useUser();

  return (
    <div className={styles.navigation}>
      <div className={styles.left}>
        <Logo1 image="/images/logo1.svg" label="TasksPoint"/>
      </div>
      <div className={styles.right}>
        {user && <UserCard1/>}
      </div>
    </div>
  )
}

export default Navigation1;
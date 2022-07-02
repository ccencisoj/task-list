import React from 'react';
import clsx from 'clsx';
import * as Icon from 'react-feather';
import styles from './UserCard1.module.scss';
import { useUser } from 'src/hooks/UserContext';
import { useViewport } from 'src/hooks/ViewportContext';

const UserCard1 = ()=> {
  const { isMobile } = useViewport();
  const user = useUser();

  const styles_user_card = clsx({
    [styles.user_card]: true,
    [styles.mobile]: isMobile
  });

  return (
    <div className={styles_user_card}>
      <img className={styles.image} src={user.image || "/images/user1.svg"}/>
      <p className={styles.username}>{user.username || "ccencisoj"}</p>
      <Icon.ChevronDown className={styles.icon}/>      
    </div>
  )
}

export default UserCard1;
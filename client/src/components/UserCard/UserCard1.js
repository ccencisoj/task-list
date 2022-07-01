import React from 'react';
import * as Icon from 'react-feather';
import styles from './UserCard1.module.scss';
import { useUser } from 'src/hooks/UserContext';

const UserCard1 = ()=> {
  const user = useUser();

  return (
    <div className={styles.user_card}>
      <img className={styles.image} src={user.image || "/images/user1.svg"}/>
      <p className={styles.username}>{user.username || "ccencisoj"}</p>
      <Icon.ChevronDown className={styles.icon}/>      
    </div>
  )
}

export default UserCard1;
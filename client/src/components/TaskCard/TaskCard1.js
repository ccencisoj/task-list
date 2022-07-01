import React from 'react';
import styles from './TaskCard1.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

const TaskCard1 = ({title})=> {
  return (
    <div className={styles.task_card}>
      <TextareaAutosize 
        className={styles.title} 
        defaultValue={title}/>
    </div>
  )
}

export default TaskCard1;
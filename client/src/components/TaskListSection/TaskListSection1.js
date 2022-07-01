import React from 'react';
import styles from './TaskListSection1.module.scss';
import TaskForm1 from 'src/components/TaskForm/TaskForm1';
import TaskBlock1 from 'src/components/TaskBlock/TaskBlock1';
import SettingBlock1 from 'src/components/SettingBlock/SettingBlock1';

const TaskListSection1 = ()=> {
  return (
    <div className={styles.task_list_section}>
      <div className={styles.task_block}>
        <TaskBlock1/>
      </div>
      <div className={styles.task_form}>
        <TaskForm1/>
      </div>
      <div className={styles.setting_block}>
        <SettingBlock1/>
      </div>
    </div>
  )
}

export default TaskListSection1;
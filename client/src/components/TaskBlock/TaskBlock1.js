import React from 'react';
import * as Icon from 'react-feather';
import styles from './TaskBlock1.module.scss';
import Button from 'src/components/Button/Button';
import TaskList1 from 'src/components/TaskList/TaskList1';
import ActionsRow from 'src/components/ActionsRow/ActionsRow';
import BlockSection1 from 'src/components/BlockSection/BlockSection1';

const TaskBlock1 = ()=> {
  return (
    <div className={styles.task_block}>
      <BlockSection1 
        title="Lista de tareas" 
        actions={
        <ActionsRow>
          <Button 
            icon={Icon.Plus} 
            small={true}
            transparentTheme={true}/>
        </ActionsRow>}>
        <TaskList1/>
      </BlockSection1>
    </div>
  )
}

export default TaskBlock1;
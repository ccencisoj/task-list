import React from 'react';
import { nanoid } from 'nanoid';
import styles from './TaskList1.module.scss';
import * as taskState from 'src/constants/task';
import TaskCard1 from 'src/components/TaskCard/TaskCard1';

const TaskList1 = ()=> {
  const taskList = [
    {
      id: nanoid(),
      title: "Dibujar un gato", 
      description: "El gato que se dibuje debe terne patas y cola",
      state: taskState.PENDING
    },
    {
      id: nanoid(),
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet",
      state: taskState.PENDING
    }
  ];

  return (
    <div className={styles.task_list}>
      {taskList.map((task)=> 
        <TaskCard1 key={task.id} {...task}/>)}
    </div>
  )
}

export default TaskList1;
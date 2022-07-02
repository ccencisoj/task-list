import React from 'react';
import { connect } from 'react-redux';
import styles from './TaskList1.module.scss';
import TaskCard1 from 'src/components/TaskCard/TaskCard1';

const mapStateToProps = (store)=> ({
  taskList: store.taskList.taskList
});

const TaskList1 = ({taskList})=> {
  return (
    <div className={styles.task_list}>
      {taskList.map((task)=> 
        <TaskCard1 key={task.id} {...task}/>)}
    </div>
  )
}

export default connect(
  mapStateToProps, null)(TaskList1);
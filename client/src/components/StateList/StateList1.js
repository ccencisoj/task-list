import React from 'react';
import Task from 'src/models/Task';
import { connect } from 'react-redux';
import styles from './StateList1.module.scss';
import RadioBox1 from 'src/components/RadioBox/RadioBox1';
import { PENDING_STATE, DOING_STATE, DONE_STATE } from 'src/constants/task';

const mapStateToProps = (store)=> ({
  selectedTask: store.taskList.selectedTask
});

const StateList1 = ({selectedTask})=> {
  return (
    <div className={styles.state_list}>
      {selectedTask &&
      <React.Fragment>
        <RadioBox1 
          label="Pendiente" 
          selected={selectedTask.state === PENDING_STATE}
          onClick={()=> Task.update(selectedTask.id, {state: PENDING_STATE})}/>
        <RadioBox1 
          label="En proceso" 
          selected={selectedTask.state === DOING_STATE}
          onClick={()=> Task.update(selectedTask.id, {state: DOING_STATE})}/>
        <RadioBox1 
          label="Terminada" 
          selected={selectedTask.state === DONE_STATE}
          onClick={()=> Task.update(selectedTask.id, {state: DONE_STATE})}/>
      </React.Fragment>}
    </div>
  )
}

export default connect(mapStateToProps, null)(StateList1);
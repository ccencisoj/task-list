import React from 'react';
import { connect } from 'react-redux';
import styles from './StateList1.module.scss';
import * as taskState from 'src/constants/task';
import RadioBox1 from 'src/components/RadioBox/RadioBox1';

const mapStateToProps = (store)=> ({
  selectedTask: store.taskList.selectedTask
});

const StateList1 = ({selectedTask})=> {
  return (
    <div className={styles.state_list}>
      {selectedTask &&
      <React.Fragment>
        <RadioBox1 label="Pendiente" 
          selected={selectedTask.state === taskState.PENDING}/>
        <RadioBox1 label="En proceso" 
          selected={selectedTask.state === taskState.DOING}/>
        <RadioBox1 label="Terminada" 
          selected={selectedTask.state === taskState.DONE}/>
      </React.Fragment>}
    </div>
  )
}

export default connect(mapStateToProps, null)(StateList1);
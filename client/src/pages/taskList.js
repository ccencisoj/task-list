import React from 'react';
import agent from 'src/agent';
import { connect } from 'react-redux';
import Page from 'src/components/Page/Page';
import Button from 'src/components/Button/Button';
import { PRIMARY_BACKGROUND } from 'src/constants/color';
import { LOAD_TASK_LIST } from 'src/constants/actionTypes';
import ActionsRow from 'src/components/ActionsRow/ActionsRow';
import Navigation1 from 'src/components/Navigation/Navigation1';
import InitialBlock1 from 'src/components/InitialBlock/InitialBlock1';
import CenteredColumn from 'src/components/CenteredColumn/CenteredColumn';
import TaskListSection1 from 'src/components/TaskListSection/TaskListSection1';

const mapStateToProps = (store)=> ({
  taskList: store.taskList.taskList
});

const mapActionsToProps = (dispatch)=> ({
  loadTaskList: (taskList)=> dispatch({
    type: LOAD_TASK_LIST,
    payload: {taskList}
  })
});

const TaskList = (props)=> {
  const { taskList, loadTaskList } = props;
  const style = {backgroundColor: PRIMARY_BACKGROUND};

  React.useEffect(()=> {
    agent.Task.getAll()
    .then((response)=> {
      loadTaskList(response.data.taskList);
    }).catch(()=> 1);
  }, []);

  return (
    <Page style={style}>
      <Navigation1/>
      {taskList.length === 1 ? 
      <CenteredColumn>
        <InitialBlock1 
          image="/images/initial1.svg" 
          title="No tienes tareas pendientes"
          actions={
          <ActionsRow>
            <Button label="Crear una tarea"/>
          </ActionsRow>}/> 
      </CenteredColumn> : 
      <TaskListSection1/>}
    </Page>
  )
}

export default connect(
  mapStateToProps, 
  mapActionsToProps)(TaskList);
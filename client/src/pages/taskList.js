import React from 'react';
import Task from 'src/models/Task';
import { connect } from 'react-redux';
import Page from 'src/components/Page/Page';
import Button from 'src/components/Button/Button';
import serverSideAuth from 'lib/server-side-auth';
import { PRIMARY_BACKGROUND } from 'src/constants/color';
import ActionsRow from 'src/components/ActionsRow/ActionsRow';
import Navigation1 from 'src/components/Navigation/Navigation1';
import InitialBlock1 from 'src/components/InitialBlock/InitialBlock1';
import CenteredColumn from 'src/components/CenteredColumn/CenteredColumn';
import TaskListSection1 from 'src/components/TaskListSection/TaskListSection1';

const mapStateToProps = (store)=> ({
  taskList: store.taskList.taskList
});

const TaskList = ({taskList})=> {
  const style = {backgroundColor: PRIMARY_BACKGROUND};

  React.useEffect(()=> Task.loadTaskList(), []);

  return (
    <Page style={style}>
      <Navigation1/>
      {taskList.length === 0 ? 
      <CenteredColumn>
        <InitialBlock1 
          image="/images/initial1.svg" 
          title="No tienes tareas pendientes"
          actions={
          <ActionsRow>
            <Button 
              label="Crear una tarea"
              primary={true}
              onClick={()=> Task.new()}/>
          </ActionsRow>}/> 
      </CenteredColumn> : 
      <TaskListSection1/>}
    </Page>
  )
}

export default connect(mapStateToProps, null)(TaskList);

export const getServerSideProps = serverSideAuth;
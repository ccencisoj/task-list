import React from 'react';
import Task from 'src/models/Task';
import * as Icon from 'react-feather';
import styles from './TaskBlock1.module.scss';
import Button from 'src/components/Button/Button';
import TaskList1 from 'src/components/TaskList/TaskList1';
import TaskModal1 from 'src/components/TaskModal/TaskModal1';
import ActionsRow from 'src/components/ActionsRow/ActionsRow';
import BlockSection1 from 'src/components/BlockSection/BlockSection1';
import { ViewportProvider, useViewport } from 'src/hooks/ViewportContext';

const TaskBlock1 = ()=> {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const { isDesktopWindow, isMobile } = useViewport();

  return (
    <React.Fragment>
      <div className={styles.task_block}>
        <BlockSection1 
          title="Lista de tareas" 
          actions={
          <ActionsRow>
            {isMobile ? 
            <Button 
              icon={Icon.Plus} 
              small={true}
              transparentTheme={true}
              onClick={()=> {
                Task.new();
                if(!isDesktopWindow) setVisibleModal(true);
              }}/> :
            <Button 
              icon={Icon.Plus}
              label="Nueva tarea" 
              primary={true}
              onClick={()=> {
                Task.new();
                if(!isDesktopWindow) setVisibleModal(true);
              }}/>}
          </ActionsRow>}>
          <TaskList1/>
        </BlockSection1>
      </div>
      <TaskModal1 
        visible={visibleModal} 
        hideModal={()=> setVisibleModal(false)}/>
    </React.Fragment>
  )
}

export default (props)=> {
  return (
    <ViewportProvider>
      <TaskBlock1 {...props}/>
    </ViewportProvider>
  )
}
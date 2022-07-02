import React from 'react';
import clsx from 'clsx';
import styles from './TaskModal1.module.scss';
import Button from 'src/components/Button/Button';
import { ModalProvider } from 'src/hooks/ModalContext';
import TaskForm1 from 'src/components/TaskForm/TaskForm1';
import ModalPortal from 'src/components/Portal/ModalPortal';
import ActionsRow from 'src/components/ActionsRow/ActionsRow';
import Navigation2 from 'src/components/Navigation/Navigation2';

const TaskModal1 = ({visible, hideModal})=> {
  const styles_task_modal = clsx({
    [styles.task_modal]: true,
    [styles.visible]: visible,
    [styles.hidden]: !visible
  });

  return (
    <ModalPortal>
      <ModalProvider hideModal={hideModal}>
        <div className={styles_task_modal}>
          <Navigation2 
            onBack={()=> hideModal()}
            actions={
            <ActionsRow>
              <Button label="Guardar"/>
            </ActionsRow>}/>
          <div className={styles.main}>
            <TaskForm1/>
          </div>
        </div>
      </ModalProvider>
    </ModalPortal>
  )
}

export default TaskModal1;
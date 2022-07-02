import React from 'react';
import clsx from 'clsx';
import Task from 'src/models/Task';
import { connect } from 'react-redux';
import styles from './TaskCard1.module.scss';
import normalizeText from 'src/utils/nomalize-text';
import TextareaAutosize from 'react-textarea-autosize';
import { useViewport } from 'src/hooks/ViewportContext';
import TaskModal1 from 'src/components/TaskModal/TaskModal1';

const mapStateToProps = (store)=> ({
  selectedTask: store.taskList.selectedTask
});

const TaskCard1 = ({title, id: taskId, selectedTask, deleted})=> {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const { isDesktopWindow, i } = useViewport();
  const textareaRef = React.useRef();
  const selected = taskId === selectedTask.id;

  const styles_task_card = clsx({
    [styles.task_card]: true,
    [styles.selected]: selected,
    [styles.unselected]: !selected,
    [styles.deleted]: deleted,
    [styles.undeleted]: !deleted
  });

  return (
    <React.Fragment>
      <div className={styles_task_card} 
        onClick={()=> {
          Task.selected(taskId);
          if(!isDesktopWindow) setVisibleModal(true);
        }}>
        <div className={styles.wrapper}>
          <TextareaAutosize 
            ref={textareaRef}
            value={title}
            disabled={!isDesktopWindow}
            className={styles.title} 
            onChange={(ev)=> {
              const title =  ev.target.value;
              Task.update(taskId, {title: title});
            }}
            onBlur={(ev)=> {
              const title =  normalizeText(ev.target.value);
              Task.update(taskId, {title: title});
            }}/>
        </div>
      </div>
      <TaskModal1 
        visible={visibleModal} 
        hideModal={()=> setVisibleModal(false)}/>
    </React.Fragment>
  )
}

export default connect(mapStateToProps, null)(TaskCard1);
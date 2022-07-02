import React from 'react';
import Task from 'src/models/Task';
import { connect } from 'react-redux';
import styles from './TaskForm1.module.scss';
import Field from 'src/components/Field/Field';
import normalizeText from 'src/utils/nomalize-text';
import Textarea from 'src/components/Textarea/Textarea';
import Container from 'src/components/Container/Container';
import SettingBlock1 from 'src/components/SettingBlock/SettingBlock1';
import { useViewport, ViewportProvider } from 'src/hooks/ViewportContext';

const mapStateToProps = (store)=> ({
  selectedTask: store.taskList.selectedTask
});

const TaskForm1 = ({selectedTask})=> {
  const { windowWidth } = useViewport();

  return (
    <form className={styles.task_form}>
      <div className={styles.main}>
        <Container columnDirection mediumSeparation>
          <Field
            name="title"
            label="Titulo"
            placeholder="ej: Dibujar un gato"
            value={selectedTask.title}
            onChange={(ev)=> {
              const title = ev.target.value;
              Task.update(selectedTask.id, {title});
            }}
            onBlur={(ev)=> {
              const title = normalizeText(ev.target.value);
              Task.update(selectedTask.id, {title});
            }}/>
          <Textarea 
            name="description"
            label="Descripcion"
            placeholder="ej: Dibujar un gato"
            value={selectedTask.description}
            onChange={(ev)=> {
              const description = ev.target.value;
              Task.update(selectedTask.id, {description});
            }}/>
        </Container>
      </div>
      <div className={styles.footer}>
        {(windowWidth < 1200) && <SettingBlock1/>}
      </div>
    </form>
  )
}

const ConnTaskForm1 = connect(mapStateToProps, null)(TaskForm1);

export default (props)=> {
  return (
    <ViewportProvider>
      <ConnTaskForm1 {...props}/>
    </ViewportProvider>
  )
}
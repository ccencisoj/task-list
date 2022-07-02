import React from 'react';
import Task from 'src/models/Task';
import { connect } from 'react-redux';
import styles from './SettingBlock1.module.scss';
import Button from 'src/components/Button/Button';
import { useModal } from 'src/hooks/ModalContext';
import Container from 'src/components/Container/Container';
import StateList1 from 'src/components/StateList/StateList1';
import BlockSection1 from 'src/components/BlockSection/BlockSection1';

const mapStateToProps = (store)=> ({
  selectedTask: store.taskList.selectedTask
});

const SettingBlock1 = ({selectedTask})=> {
  const { hideModal } = useModal();

  return (
    <div className={styles.setting_block}>
      <Container columnDirection mediumSeparation>
        <BlockSection1 title="Estado">
          <StateList1/>
        </BlockSection1>
        <BlockSection1 title="Acciones">
          <Container columnDirection smallSeparation>
            <Button
              label="Eliminar tarea"
              redTheme={true}
              expand={true}
              onClick={()=> {
                Task.delete(selectedTask.id);
                if(typeof hideModal === "function") hideModal();
              }}/>
          </Container>
        </BlockSection1>
      </Container>
    </div>
  )
}

export default connect(
  mapStateToProps, null)(SettingBlock1);
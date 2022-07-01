import React from 'react';
import styles from './SettingBlock1.module.scss';
import StateList1 from 'src/components/StateList/StateList1';
import BlockSection1 from 'src/components/BlockSection/BlockSection1';

const SettingBlock1 = ()=> {
  return (
    <div className={styles.setting_block}>
      <BlockSection1 title="Estado">
        <StateList1/>
      </BlockSection1>
    </div>
  )
}

export default SettingBlock1;
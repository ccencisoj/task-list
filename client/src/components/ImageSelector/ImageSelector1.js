import React from 'react';
import * as Icon from 'react-feather';
import styles from './ImageSelector1.module.scss';
import { useStorage } from 'src/hooks/StorageContext';

const ImageSelector1 = ({onChange})=> {
  const [image, setImage] = React.useState("/images/user1.svg");
  const storage = useStorage();

  const loadImage = ()=> {
    storage.loadImage((image)=> {
      setImage(image.src);
      onChange(image.dataURL);
    });
  }

  return (
    <div className={styles.image_selector} onClick={loadImage}>
      <img className={styles.image} src={image}/>
      <p className={styles.label}>Seleccionar imagen</p>
      <Icon.ChevronRight className={styles.icon}/>
    </div>
  )
}

export default ImageSelector1;
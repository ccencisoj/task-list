import React from 'react';
import * as Icon from 'react-feather';
import styles from './ImageSelector1.module.scss';
import { useStorage } from 'src/hooks/StorageContext';

const ImageSelector1 = ({onChange})=> {
  const defaultImageURL = "/images/user1.svg";
  const [image, setImage] = React.useState(defaultImageURL);
  const storage = useStorage();

  React.useEffect(()=> {
    fetch(defaultImageURL)
    .then(r => r.blob())
    .then((imageBlob)=> onChange(imageBlob));
  }, []);

  const loadImage = ()=> {
    storage.loadImage((image)=> {
      setImage(image.src);
      onChange(image.blob);
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
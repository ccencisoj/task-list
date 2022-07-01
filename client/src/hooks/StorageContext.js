import React from 'react';
import { nanoid } from 'nanoid';

const StorageContext = React.createContext({
  loadImage: (callback)=> {},
});

const StorageProvider = ({children})=> {
  const loadImage = (callback)=> {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = false;
    input.accept = ".jpg, .png, .svg";

    input.addEventListener("change", (ev)=> {
      const fileReader = new FileReader();
      const file = ev.target.files[0];

      fileReader.onloadend = ()=> {
        const dataURL = fileReader.result;
        
        const image = {
          id: nanoid(),
          blob: file,
          dataURL: dataURL,
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          src: window.URL.createObjectURL(file)
        };
        callback(image);
      }

      fileReader.readAsDataURL(file);
    });
    input.click();
  }

  return (
    <StorageContext.Provider 
      value={{loadImage}}>
      {children}
    </StorageContext.Provider>
  )
}

const useStorage = ()=> {
  return React.useContext(StorageContext);
}

export { StorageProvider, useStorage };
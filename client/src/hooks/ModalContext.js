import React from 'react';

const ModalContext = React.createContext({});

const ModalProvider = ({children, hideModal})=> {
  return (
    <ModalContext.Provider value={{hideModal}}>
      {children}
    </ModalContext.Provider>
  )
}

const useModal = ()=> {
  return React.useContext(ModalContext);
}

export { ModalProvider, useModal };
import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children })=> {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(()=> setMounted(true), []);

  return mounted ? ReactDOM.createPortal(children, document.body) : null;
}

export default ModalPortal;
import React from 'react';

const useBlockViewport = ()=> {
  const blockRef = React.useRef();
  const [state, setState] = React.useState({
    width: null,
    height: null,
    isDesktop: false,
    isTablet: false,
    isMobile: false
  });

  const getViewport = ()=> {
    const block = blockRef.current;
    const rect = block.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const isMobile = rect.width <= 640;
    const isDesktop = rect.width >= 1024;
    const isTablet = rect.width > 640 && rect.width < 1024; 
    return { width, height, isDesktop, isTablet, isMobile };
  }

  const resizedWindow = ()=> {
    const viewport = getViewport();
    setState(viewport);
  }

  React.useEffect(()=> {
    const viewport = getViewport();
    setState(viewport);
    window.addEventListener("resize", resizedWindow);
    return ()=> window.removeEventListener("resize", resizedWindow);
  }, []);

  return {blockRef, ...state};
}

export default useBlockViewport;
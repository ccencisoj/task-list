import React from 'react';

const ViewportContext = React.createContext({
  viewportWidth: null,
  viewportHeight: null,
  isDesktop: false,
  isTablet: false,
  isMobile: false,
  windowWidth: null,
  windowHeight: null,
  isDesktopWindow: null,
  isTabletWindow: null,
  isMobileWindow: null
});

const ViewportProvider = ({children})=> {
  const [value, setValue] = React.useState({
    viewportWidth: null,
    viewportHeight: null,
    isDesktop: false,
    isTablet: false,
    isMobile: false,
    windowWidth: null,
    windowHeight: null,
    isDesktopWindow: null,
    isTabletWindow: null,
    isMobileWindow: null
  });

  const wrapperRef = React.useRef();

  const updateViewport = ()=> {
    const wrapper = wrapperRef.current;
    const rect = wrapper.getBoundingClientRect();

    setValue({
      viewportWidth: rect.width,
      viewportHeight: rect.height,
      isMobile: rect.width <= 640,
      isDesktop: rect.width >= 1024,
      isTablet: rect.width > 640 && rect.width < 1024,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isMobileWindow: window.innerWidth <= 640,
      isDesktopWindow: window.innerWidth >= 1024,
      isTabletWindow: window.innerWidth > 640 && window.innerWidth < 1024,
    });
  }

  React.useEffect(()=> {
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return ()=> window.removeEventListener("resize", updateViewport);
  }, []);

  return (
    <ViewportContext.Provider value={value}>
      <div ref={wrapperRef} style={{width: "100%"}}>{children}</div>
    </ViewportContext.Provider>
  )
} 

const useViewport = ()=> {
  return React.useContext(ViewportContext);
}

export { ViewportProvider, useViewport };
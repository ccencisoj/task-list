import React from 'react';
import store from 'src/store';
import { Provider } from 'react-redux';
import { UserProvider } from 'src/hooks/UserContext';
import { StorageProvider } from 'src/hooks/StorageContext';
import { ViewportProvider } from 'src/hooks/ViewportContext';

import "public/scss/reset.scss";
import "public/scss/variables.scss";

const App = ({Component, pageProps})=> {
  return (
    <Provider store={store}>
      <ViewportProvider>
        <StorageProvider>
          <UserProvider>
            <Component {...pageProps}/>      
          </UserProvider>
        </StorageProvider>
      </ViewportProvider>
    </Provider>
  )
}

export default App;

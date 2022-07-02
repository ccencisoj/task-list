import React from 'react';
import agent from 'src/agent';

const UserContext = React.createContext({
  email: "",
  image: "",
  username: ""
});

const UserProvider = ({children})=> {
  const [state, setState] = React.useState(null);

  React.useEffect(()=> {
    agent.User.current().then((response)=> {
      const user = response.data.user;
      
      if(user) {
        setState({
          email: user.email, 
          image: user.image,
          username: user.username
        });
      } 
    });
  }, [children]);

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = ()=> {
  return React.useContext(UserContext);
}

export { UserProvider, useUser };
import React from 'react';

const UserContext = React.createContext({
  email: "",
  username: "",
  profile: {image: ""}
});

const UserProvider = ({children})=> {
  const [state, setState] = React.useState({
    email: "bizapro123@gmail.com",
    username: "ccencisoj",
    profile: {image: "/images/user1.svg"}
  });

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
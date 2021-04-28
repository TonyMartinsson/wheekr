import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(undefined);
  // const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    // TODO
  // axios.get("/api/users/authenticate") 
  // user/null
  setUser(undefined)

  axios
  .get('/api/users/authenticate')
  .then(({ data: user }) => {
    console.log(user)

    setUser(user)
    
})
  .catch(err =>{
    console.log('Error');
  })

    // om ja setUser(user)
    // annars setUser(undefined)
  }, [setUser])
  
  // const userLoggedIn = document.cookie;
  // if (userLoggedIn) {
  //   username = localStorage.getItem('LoggedInUser');
  //   loggedIn = true;
  // }


  // const user = { name: username, loggedIn: loggedIn}
  return (
    <UserProvider value={{
      user,
      setUser
    }}>
      <Router>
        <Layout />
      </Router>
    </UserProvider>
  );
}

export default App;

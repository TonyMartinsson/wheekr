import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import axios from 'axios';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {  
  axios
  .get('/api/users/authenticate')
  .then(({ data: user }) => {
    setUser(user)
    
  })
  .catch(err =>{
    console.log('No user is logged in');
    setUser()
  })

  }, [setUser])

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

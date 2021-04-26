import React from 'react';
import Layout from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext'

function App() {
  let username = '';
  let loggedIn = false;
  
  const userLoggedIn = document.cookie;
  if (userLoggedIn) {
    username = localStorage.getItem('LoggedInUser');
    loggedIn = true;
  }

  const user = { name: username, loggedIn: loggedIn }
  return (
    <UserProvider value={user}>
      <Router>
        <Layout />
      </Router>
    </UserProvider>
  );
}

export default App;

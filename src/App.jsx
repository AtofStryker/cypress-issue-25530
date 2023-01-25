import React from 'react';
import './App.css';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if(!isAuthenticated){
    loginWithRedirect();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Welcome to the Auth0 Cypress Integration Test Home Page</h4>
        <p>
          <LoginButton/>
          <LogoutButton/>
        </p>
        <div>
          <Profile/>
        </div>
      </header>
    </div>
  );
}

export default App;

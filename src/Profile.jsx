import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <p data-cy="loading">Loading ...</p>;
  }

  if (isAuthenticated) {
    return (
      <div data-cy="user-authenticated">
        <img data-cy="user-picture" src={user.picture} alt={user.name} />
        <h2 data-cy="user-name">{user.name}</h2>
        <p data-cy="user-email">{user.email}</p>
        <p data-cy="user-sub">{user.sub}</p>
      </div>
    );
  }

  return <div data-cy="user-unauthenticated"> You are not authenticated. Please Log in.</div>;
};

export default Profile;

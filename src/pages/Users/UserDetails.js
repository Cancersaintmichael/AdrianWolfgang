import React from 'react';
import { useParams } from 'react-router-dom';

export const UserDetails = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>User details {userId}</h1>
    </div>
  );
};

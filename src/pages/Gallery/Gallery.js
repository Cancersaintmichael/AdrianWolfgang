import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Link, Outlet } from 'react-router-dom';

export const Gallery = () => {
  return (
    <div>
      <Navigation>
        <Link to="images">Images</Link>
        <Link to="videos">Videos</Link>
      </Navigation>
      <Outlet />
    </div>
  );
};

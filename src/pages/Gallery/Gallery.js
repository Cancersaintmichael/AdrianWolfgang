import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Link, Outlet } from 'react-router-dom';

export const Gallery = () => {
  return (
    <div>
      <Navigation>
        <Link to="images" />
        <Link to="videos" />
      </Navigation>
      <Outlet />
    </div>
  );
};

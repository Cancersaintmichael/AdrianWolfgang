import React from 'react';
import { MainContainer } from '../../components/Container/Container';
import Navigation from '../../components/Navigation/Navigation';
import { Link, Outlet } from 'react-router-dom';

export const Gallery = () => {
  return (
    <MainContainer>
      <Navigation>
        <Link to="images">Images</Link>
        <Link to="videos">Videos</Link>
      </Navigation>
      <Outlet />
    </MainContainer>
  );
};

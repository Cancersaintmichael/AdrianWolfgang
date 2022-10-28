import React from 'react';
import { MainContainer } from '../../components/Container/Container';
import Navigation from '../../components/Navigation/Navigation';
import PageHead from '../../components/PageHead/PageHead';
import { Link, Outlet } from 'react-router-dom';

export const Gallery = () => {
  return (
    <MainContainer>
      <PageHead
        pageTitle="Gallery"
        pageDescription="Welcome to the gallery, here you can find images and videos from the Szarfasz Baszrián Cinematic Universe"
      />
      <Navigation>
        <Link to="images">Images</Link>
        <Link to="videos">Videos</Link>
      </Navigation>
      <Outlet />
    </MainContainer>
  );
};

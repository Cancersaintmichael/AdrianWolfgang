import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PageHead from '../../components/PageHead/PageHead';
import { MainContainer } from '../../components/Container/Container';

export const Products = () => {
  return (
    <>
      <MainContainer>
        <PageHead
          pageTitle="Products"
          pageDescription="Here you can find awesome products related to the Szarfasz Baszrián Universe"
        />
        <nav>
          <Link to="featured">Featured</Link>
          <Link to="new">New</Link>
        </nav>
        <Outlet />
      </MainContainer>
    </>
  );
};

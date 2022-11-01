import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PageHead from '../../components/PageHead/PageHead';
import Navigation from '../../components/Navigation/Navigation';
import { MainContainer } from '../../components/Container/Container';

export const Products = () => {
  return (
    <>
      <MainContainer>
        <PageHead
          pageTitle="Products"
          pageDescription="Here you can find awesome products related to the Szarfasz Baszrián Universe"
        />
        <Navigation>
          <NavLink to="featured">Featured</NavLink>
          <NavLink to="new">New</NavLink>
        </Navigation>
        <Outlet />
      </MainContainer>
    </>
  );
};

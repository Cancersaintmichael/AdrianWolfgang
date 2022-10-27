import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styles';

export default function Navigation() {
  return (
    <StyledNavigation>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
    </StyledNavigation>
  );
}

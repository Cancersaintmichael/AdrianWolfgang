import React from 'react';
import { StyledMobileSidebar } from './MobileSidebar.styles';
import { CgMenuGridR } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function MobileSidebar() {
  const [sidebarOpen, setSide] = useState(false)
  return (
    <StyledMobileSidebar>
      <CgMenuGridR size="2em" />
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </StyledMobileSidebar>
  );
}

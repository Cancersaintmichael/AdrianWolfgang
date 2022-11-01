import React from 'react';
import { StyledSidebar } from './Sidebar.styles';
import { CgMenuGridR } from 'react-icons/cg';
import { CgCloseR } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <StyledSidebar>
      <div onClick={handleToggle}>
        {sidebarOpen ? <CgCloseR size="2em" /> : <CgMenuGridR size="2em" />}
      </div>
      <nav className={`${sidebarOpen ? ' open ' : ''}`}>
        <NavLink to="/" onClick={() => closeSidebar()} end>
          Home
        </NavLink>
        <NavLink to="/gallery" onClick={() => closeSidebar()}>
          Gallery
        </NavLink>
        <NavLink to="/news" onClick={() => closeSidebar()}>
          News
        </NavLink>
        <NavLink to="/products" onClick={() => closeSidebar()}>
          Products
        </NavLink>
        <NavLink to="/about" onClick={() => closeSidebar()}>
          About
        </NavLink>
      </nav>
    </StyledSidebar>
  );
}

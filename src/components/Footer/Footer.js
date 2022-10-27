import React from 'react';
import { StyledFooter } from './Footer.styles';
import { StyledLogo } from '../Logo/Logo.styles';
import { MainContainer } from '../Container/Container';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <StyledFooter>
      <MainContainer>
        <NavLink to="/">
          <StyledLogo />
        </NavLink>
        <p>DominikBudapest.com - Copyright 2022</p>
      </MainContainer>
    </StyledFooter>
  );
}

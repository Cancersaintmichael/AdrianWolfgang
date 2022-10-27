import React from 'react';
import { StyledHeader } from './Header.styles';
import { StyledLogo } from '../Logo/Logo.styles';
import { MainContainer } from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import { StyledHeader } from './Header.styles';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function Header() {
  const scrollPosition = useScrollPosition();

  return (
    <StyledHeader
      style={
        scrollPosition > 0
          ? { borderTop: '2px solid var(--header-background)' }
          : {
              borderTop: '2px solid var(--primary-color)',
              borderBottom: '1px solid #ededed',
            }
      }
    >
      <MainContainer>
        <NavLink to="/">
          <StyledLogo />
        </NavLink>
        <Navigation></Navigation>
      </MainContainer>
      <ScrollIndicator />
    </StyledHeader>
  );
}

import React from 'react';
import { StyledHeader } from './Header.styles';
import { StyledLogo } from '../Logo/Logo.styles';
import { MainContainer } from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import { StyledHeader } from './Header.styles';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useScrollIndicator } from '../../hooks/useScrollIndicator';

export default function Header() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  const scrollIndicator = useScrollIndicator();
  console.log(scrollIndicator);

  return (
    <StyledHeader
      style={
        scrollPosition > 0
          ? { borderBottom: '2px solid var(--primary-color)' }
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
      <ScrollIndicator
        style={
          scrollPosition > 0
            ? { display: 'block' }
            : {
                display: 'none',
              }
        }
      />
    </StyledHeader>
  );
}

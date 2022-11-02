import React from 'react';
import { StyledNavigation } from './Navigation.styled';

export default function Navigation(props) {
  return <StyledNavigation>{props.children}</StyledNavigation>;
}

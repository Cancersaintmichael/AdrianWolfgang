import React from 'react';
import { StyledNavigation } from './Navigation.styles';

export default function Navigation(props) {
  return <StyledNavigation>{props.children}</StyledNavigation>;
}

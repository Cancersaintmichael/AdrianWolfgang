import React from 'react';
import { StyledPageHead } from './PageHead.styles';

export default function Block(props) {
  const pageTitle = props.pageTitle;
  const pageDescription = props.pageDescription;
  return (
    <StyledPageHead>
      <h1>{pageTitle}</h1>
      <p>{pageDescription}</p>
    </StyledPageHead>
  );
}

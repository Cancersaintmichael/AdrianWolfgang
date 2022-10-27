import React from 'react';
import { MainContainer } from '../Container/Container';
import { StyledBlock } from './Block.styles';

export default function Block(props) {
  const blockTitle = props.blockTitle;
  return (
    <StyledBlock>
      <MainContainer>
        <h2>{blockTitle}</h2>
        <div>
        {props.children}
        </div>
      </MainContainer>
    </StyledBlock>
  );
}

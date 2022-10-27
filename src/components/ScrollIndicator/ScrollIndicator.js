import React from 'react';
import { StyledScrollIndicator } from './ScrollIndicator.styles';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useScrollIndicator } from '../../hooks/useScrollIndicator';

export default function ScrollIndicator() {
  const scrollPosition = useScrollPosition();
  const scrollProgress = useScrollIndicator();
  return (
    <StyledScrollIndicator
      style={
        scrollPosition > 0
          ? { display: 'block' }
          : {
              display: 'none',
            }
      }
    >
      <div style={{ width: scrollProgress + '%' }}></div>
    </StyledScrollIndicator>
  );
}

import styled from 'styled-components';

export const StyledScrollIndicator = styled.div`
  height: 4px;
  width: 100%;
  background: var(--scroll-indicator-background);

  > div {
    height: 4px;
    background: var(--primary-color);
    width: 0%;
    transition: width 0.2s ease-out;
  }
`;

import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--header-background);
  position: sticky;  
  top: 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div > nav {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

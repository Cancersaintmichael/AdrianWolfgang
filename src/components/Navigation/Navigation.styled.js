import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: var(--text-color);
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover, .active {
    color: var(--link-hover-color);
  }
`;

import styled from 'styled-components';

export const StyledSidebar = styled.div`
  @media (min-width: 767px) {
    display: none;
  }

  nav {
    display: none;
    position: fixed;
    width: 100%;
    left: 0;
    justify-content: center;
    text-align: center;
    top: 100px;
    background: white;
  }

  .open {
    display: grid;
  }

  a {
    color: var(--text-color);
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    padding: .5em 1em;
  }

  a:hover, .active {
    color: var(--link-hover-color);
  }
`;

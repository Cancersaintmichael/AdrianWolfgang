import styled from 'styled-components';

export const StyledSidebar = styled.div`
  @media (min-width: 767px) {
    display: none;
  }

  nav {
    display: none;
    height: 100%;
    flex-direction: column;
    position: fixed;
    top: 100px;
    background: white;
    width: 100%;
  }

  .open {
    display: flex;
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

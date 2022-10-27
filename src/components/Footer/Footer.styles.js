import styled from 'styled-components';

export const StyledFooter = styled.footer`
background-color: var(--footer-background);
color: white;

> div {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

p {
  font-weight: bold;
}
`;

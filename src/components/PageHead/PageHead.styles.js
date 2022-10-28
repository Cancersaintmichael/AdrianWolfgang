import styled from 'styled-components';

export const StyledPageHead = styled.section`
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 1rem;

h1 {
  font-size: var(--page-heading-font-size);
  margin: 0;
  padding-bottom: 1rem;
  border-bottom: 4px solid var(--text-color);
}

p {
  padding-top: 1rem;
  margin: 0;
}
`;

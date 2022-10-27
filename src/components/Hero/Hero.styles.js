import styled from 'styled-components';

export const StyledHero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://wp-themes.com/wp-content/themes/neve/assets/img/starter-content/hero.jpg");
  background-size: cover;
  background-position: center;
  padding: 1rem 0;
  height: 6000px;
  display: flex;
  align-items: center;

  div:first-child {
    width: max-content;
    margin: 0 auto;
    text-align: center;
  }

  div:first-child div {
    display: flex;
    gap: 1rem;
  }

  button {
    flex: 1;
  }

  h1 {
    margin-top: 0;
    font-size: 3rem;
  }
 
  p {
    font-style: italic;
    font-weight: 500;
  }
`;

import styled from 'styled-components';

export const StyledBlock = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 1rem 0;
  display: flex;
  align-items: center;

  > div > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    }

  > div > div a {
    flex: 1;
  }

  h2 {
    margin-block-start: 0;
  }
`;

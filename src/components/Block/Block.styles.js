import styled from 'styled-components';

export const StyledBlock = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 1rem 0;
  height: 350px;
  display: flex;
  align-items: center;

  > div > div {
    display: flex;
    gap: 1rem;
  }

  > div > div a {
    flex: 1;
  }

  h2 {
    margin-block-start: 0;
  }
`;

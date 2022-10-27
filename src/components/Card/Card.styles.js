import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 2px solid var(--primary-color);
  transition: .2s background-color ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }

  h3 {
    margin-block-end: 0;
  }
`;

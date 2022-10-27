import styled from 'styled-components';

export const StyledCard = styled.div`
  color: var(--text-color);
  padding: 1rem 0;
  font-weight: bold;
`;

export const SocialVariant = styled(StyledCard)`
    background-color: white;
    border: 2px solid var(--primary-color);
    &:hover {
      background-color: #eee;
    }
`;

import styled from 'styled-components';

export const StyledCard = styled.button`
  color: var(--text-color);
  padding: 1rem 0;
  font-weight: bold;
`;

export const SocialVariant = styled(StyledCard)`
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    &:hover {
      color: var(--button-hover-color);
      background-color: var(--primary-button-hover-background);
      border-color: var(--primary-button-hover-background);
    }
`;

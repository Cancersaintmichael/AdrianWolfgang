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

export const ImageVariant = styled(StyledCard)`
    background-color: var(--light-background);
    border: 2px solid var(--primary-color);
    padding: 1rem;
    margin: 0 0 1rem;
    width: 100%;
    overflow: hidden;
    break-inside: avoid;
`;

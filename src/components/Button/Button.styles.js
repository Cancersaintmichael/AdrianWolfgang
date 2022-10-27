import styled from 'styled-components';

export const StyledButton = styled.button`
  color: var(--text-color);
  padding: 10px 22px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${(props) =>
    props.variant === 'primary' ? 'blue' : '#fff'};
`;

export const PrimaryButton = styled(StyledButton)`
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    &:hover {
      color: var(--button-hover-color);
      background-color: var(--primary-button-hover-background);
      border-color: var(--primary-button-hover-background);
    }
`;

export const SecondaryButton = styled(StyledButton)`
    border: 2px solid var(--secondary-color);
    &:hover {
      background-color: var(--secondary-button-hover-color);
      color: var(--button-hover-color);
    }
`;

export const SubmitButton = styled(StyledButton).attrs(
  (props) => ({
    type: 'submit',
  }`
    background-color: green;
    &:hover {
      color: black;
    }
`)
);

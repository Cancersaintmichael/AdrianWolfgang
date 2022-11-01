import styled from 'styled-components';

export const StyledGallery = styled.section`

${(props) => {
  switch (props.type) {
    case 'image':
      return css`
      columns: 3;
      column-gap: 1rem;
      margin: 20px auto;
      @media (max-width: 767px) {
        columns: 2;
      }
      @media (max-width: 480px) {
        columns: 1;
      }
      `;
    case 'video':
      return css`
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      `;
  }
}}
`;

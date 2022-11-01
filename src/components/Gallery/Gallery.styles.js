import styled, { css } from 'styled-components';

export const StyledGallery = styled.section`
margin: 20px auto;
columns: 3;
column-gap: 1rem;

iframe {
  width: 100%;
  height: 300px;
}

@media (max-width: 767px) {
  columns: 2;
}
@media (max-width: 480px) {
  columns: 1;
}
    `;

import styled from 'styled-components';

export const StyledGallery = styled.section`
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

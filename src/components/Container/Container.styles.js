import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
`;

export const MainContainer = styled(StyledContainer)`
    max-width: var(--main-container-width);
`;

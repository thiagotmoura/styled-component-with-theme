import styled from 'styled-components';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.colors.background};
`;

export default Wrapper;
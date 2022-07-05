import styled from 'styled-components';

const Button = styled.button`
    font-family: cursive;
    font-size: 25px;
    background-color: ${props => props.theme.colors.onBackground};
    color: ${props => props.theme.colors.primary};
    border: none;
    width: 350px;
    height: 60px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.hoverBackground};
        color: ${props => props.theme.colors.secondary};
    }
`;

export default Button;
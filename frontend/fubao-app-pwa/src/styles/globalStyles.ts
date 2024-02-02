import styled from 'styled-components';

export const Wireframe = styled.div`
    border: 1px solid black;
`;

export const HomeIcon = styled.div`
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: ${props => props.color || 'black'}
;
`;
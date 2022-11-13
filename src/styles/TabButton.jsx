import styled from "styled-components";

export const TabButton = styled.button`
    color: ${props => props.outline ? 'black': 'white'};
    background-color:${props => props.outline ? 'none': '#35b8be'} ;
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: ${props => props.outline ? '0.5px solid #8c8c8c5b': 'none'};
    border-radius:5px;
    background-image: url("Assets/ButtonWave.svg");
`
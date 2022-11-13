import styled from "styled-components";

export const Button = styled.button`
    color: ${props => props.outline ? 'black': 'white'};
    background-color:${props => props.outline ? 'none': '#35b8be'} ;
    padding: 15px;
    font-size: 20px;
    border: ${props => props.outline ? '0.5px solid #8c8c8c5b': 'none'};
    border-radius:8px;
    background-image: url("Assets/ButtonWave.svg");
    text-align: center;
    background-repeat: no-repeat;

    &:hover{
        background-color:${props => props.outline ? 'none': '#30a8ae'};
    }

    &:active{
        background-color: ${props => props.outline ? 'none': '#299398'};
    }
`
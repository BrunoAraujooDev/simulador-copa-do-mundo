import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100vw;
    text-align: center;
    padding: 2rem;
    background-color: ${prop => prop.theme['green-header']};
    position: fixed;
    top: 0;
`

export const TituloStyle = styled.h1`
    color: ${prop => prop.theme['white']};

`
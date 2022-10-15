import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100vw;
    display: flex;
    width: 100vw;
    padding: 2rem;
    background-color: ${prop => prop.theme['red-qatar']};
    position: fixed;
    top: 0;
    color: ${prop => prop.theme['white']};

    a{
        text-decoration: none;
        color: ${prop => prop.theme['white']};
    }

    svg{
        flex: 1;
        margin-right: 600px;
    }
`

export const TituloStyle = styled.h1`
    width: 60%;

`
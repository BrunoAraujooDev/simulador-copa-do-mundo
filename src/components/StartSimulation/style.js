import styled from "styled-components";

export const SimulationContainer = styled.div`
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    p {
        color: ${prop => prop.theme['gray-text']};
        font-size: 1.5rem;
    }
`

export const ButtonSimulation = styled.button`
    border: 1px solid ${prop => prop.theme['green-base']};
    color: ${prop => prop.theme['green-base']};
    padding: 1.5rem 3rem;
    background-color: ${prop => prop.theme['white']};
    border-radius: 8px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        color: ${prop => prop.theme['white']};
        background-color: ${prop => prop.theme['green-base']};
    }
`
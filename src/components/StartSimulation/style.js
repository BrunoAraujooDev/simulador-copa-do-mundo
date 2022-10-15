import styled from "styled-components";

export const SimulationContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    

    img{
        width: 500px;
        height: 800px;
        margin-left: 2rem;
    }
`

export const DivTextButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    p {
        color: ${prop => prop.theme['gray-text']};
        font-size: 1.5rem;
    }
`

export const ButtonSimulation = styled.button`
    border: 1px solid ${prop => prop.theme['red-base']};
    color: ${prop => prop.theme['red-base']};
    padding: 1.5rem 3rem;
    background-color: ${prop => prop.theme['white']};
    border-radius: 8px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        color: ${prop => prop.theme['white']};
        background-color: ${prop => prop.theme['red-qatar']};
    }
`
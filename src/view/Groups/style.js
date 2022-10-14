import styled from "styled-components";



export const GroupsLayout = styled.article`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`

export const ResultsDiv = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

`
 export const RoundButtonsDiv = styled.div`
    display: flex;
    width: 230px;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 5rem;
`

export const ButtonChangeRound = styled.button`
    border: none;
    background-color: ${prop => prop.theme['white']};
    cursor: pointer;
`

export const RoundText = styled.div`
    width:6rem;
    font-size: 1.3rem;
    border: none;
    background-color: ${prop => prop.theme['white']};
    border-bottom: 4px solid ${prop => prop.theme['green-base']};
    padding-bottom: 0.8rem;
    position: inherit; 
`

export const MatchesDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
`

export const MatchDiv = styled.div`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const GroupsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 2rem 5rem;
    width: 100%;
    margin-top: 2rem;
`


export const TableGroups = styled.table`

    width: 70%;
    height: calc(100vh - 200rem);
    border-radius: 6px;
    border-collapse: collapse;
    border-spacing: 0.8rem;
    text-align: justify;
    min-height: 10rem;

    thead{
        border-bottom: 1px solid ${prop => prop.theme['gray-border']};
    }


    
`

export const LoadingMessage = styled.p`
    color: ${prop => prop.theme['gray-text']};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
`

export const ChangePageButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    gap: 1rem;
    border: 1px solid ${prop => prop.theme['red-base']};
    padding: 1rem 2rem;
    border-radius: 8px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: ${prop => prop.theme['white']};

    &:hover{
        color: ${prop => prop.theme['white']};
        background-color: ${prop => prop.theme['red-base']};
    }
`
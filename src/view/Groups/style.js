import styled from "styled-components";



export const GroupsLayout = styled.article`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ResultsDiv = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RoundButton = styled.button`

    cursor: pointer;
    width:6rem;
    font-size: 1.3rem;
    border: none;
    background-color: ${prop => prop.theme['white']};
    border-bottom: 4px solid ${prop => prop.theme['green-base']};
    padding-bottom: 0.8rem;
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
    margin-top: 2.37rem;
    padding: 2rem 5rem;
    width: 100vw;
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
`
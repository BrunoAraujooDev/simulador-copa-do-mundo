import styled from "styled-components";



export const PlayoffContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    min-height: 100vh;
    margin-top: 100px;
    align-items: center;
    justify-content: space-evenly;
        
`

export const RoundSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 500px;
    align-items: center;
    gap: 2rem;
`



export const MatchupDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const DivPenalty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const SpanResult = styled.span`
    font-weight: bold;
    font-size: 1.125rem;
`

export const SpanPenalty = styled.span`
    font-weight: bold;
    font-size: 0.8rem;
    color: ${prop => prop.theme['red-base']};
`

export const SendButton = styled.button`
     border: 1px solid ${prop => prop.theme['green-base']};
     color: ${prop => prop.theme['white']};
    padding: 1rem;
    background-color: ${prop => prop.theme['green-base']};
    border-radius: 8px;
    text-transform: uppercase;
    cursor: pointer;
    position: absolute;
    right: 45%;
    top: 20%;
`
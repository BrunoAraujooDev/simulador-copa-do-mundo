import styled from "styled-components";



export const PlayoffContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    min-height: 100vh;
    margin-top: 220px;
    justify-content: space-evenly;
        
`

export const RoundSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 800px;
    align-items: center;
    gap: 2rem;
`



export const MatchupDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`


export const SpanResult = styled.span`
    font-weight: bold;
    font-size: 1.125rem;
`
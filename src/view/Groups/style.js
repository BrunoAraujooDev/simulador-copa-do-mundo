import styled from "styled-components";


export const GroupsContainer = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 8.37rem;
    padding: 2rem 5rem;
    width: 100vw;
`


export const TableGroups = styled.table`

    width: 37.5%;
    height: calc(100vh - 200rem);
    border-bottom: 1px solid ${prop => prop.theme['gray-background']};
    overflow-x: overlay;
    overflow-y: scroll;
    border-spacing: 0 0.2rem;
    text-align: justify;

    
`
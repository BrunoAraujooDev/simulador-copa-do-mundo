import { Link } from "react-router-dom";
import { ButtonSimulation, DivTextButton, SimulationContainer } from "./style";
import soccer from '../../assets/soccer.svg';

export function StartSimulation(){

    return (
        <SimulationContainer>
            <DivTextButton>
                <p>Clique no botão e inicie a simulação</p>
                <Link to='/groups'><ButtonSimulation type='button'>Simular</ButtonSimulation></Link>
            </DivTextButton>
            <img src={soccer} alt="Jogador de futebol fazendo embaixadinha" />
            
        </SimulationContainer>
    )
}
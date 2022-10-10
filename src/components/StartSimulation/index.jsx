import { Link } from "react-router-dom";
import { ButtonSimulation, SimulationContainer } from "./style";

export function StartSimulation(){

    return (
        <SimulationContainer>
            <p>Clique no botão e inicie a simulação</p>
            <Link to='/groups'><ButtonSimulation type='button'>Simular</ButtonSimulation></Link>
            
        </SimulationContainer>
    )
}
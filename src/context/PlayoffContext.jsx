import { createContext, useState } from "react";
import { makeMatchups } from "../util/makeMatchups";


export const PlayoffContext = createContext();

export function PlayoffProvider({children}){

    const [playoffTeams, setPlayoffTeams] = useState([])


    function handleMatchUps(teams){

        let resp = makeMatchups(teams)

        setPlayoffTeams(resp)
    }

    return (
        <PlayoffContext.Provider value={{playoffTeams, handleMatchUps}}>
            {children}
        </PlayoffContext.Provider>
    )
}
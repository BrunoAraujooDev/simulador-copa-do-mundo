import { useContext } from "react"
import { PlayoffContext } from "../../context/PlayoffContext"
import { EightRoundSection, MatchupDiv, PlayoffContainer } from "./style"

export function PlayoffComponent() {

    const { playoffTeams } = useContext(PlayoffContext)

    return (
        <PlayoffContainer>
            <EightRoundSection> 
                <MatchupDiv>
                    <h3>{playoffTeams[0].name}</h3>
                    <span>X</span>
                    <h3>{playoffTeams[1].name}</h3>
                </MatchupDiv>
                <MatchupDiv>
                    <h3>{playoffTeams[2].name}</h3>
                    <span>X</span>
                    <h3>{playoffTeams[3].name}</h3>
                </MatchupDiv>
                <MatchupDiv>
                    <h3>{playoffTeams[4].name}</h3>
                    <span>X</span>
                    <h3>{playoffTeams[5].name}</h3>
                </MatchupDiv>
                <MatchupDiv>
                    <h3>{playoffTeams[6].name}</h3>
                    <span>X</span>
                    <h3>{playoffTeams[7].name}</h3>
                </MatchupDiv>
            </EightRoundSection>
            <EightRoundSection >
                <MatchupDiv>
                    <h3>{playoffTeams[8].name}</h3>
                    <span>X</span>
                    <h3>{playoffTeams[9].name}</h3>
                </MatchupDiv>
                <MatchupDiv>
                    <h3>{playoffTeams[10].name}</h3>
                    <span>X</span>
                    <h3>{playoffTeams[11].name}</h3>
                </MatchupDiv>
                <MatchupDiv>
                    <h3>{playoffTeams[12].name}</h3>
                    <span>X</span>
                    <h3>{playoffTeams[13].name}</h3>
                </MatchupDiv>
                <MatchupDiv>
                    <h3>{playoffTeams[14].name}</h3>
                    <span>X</span>
                    <h3>{playoffTeams[15].name}</h3>
                </MatchupDiv>
            </EightRoundSection>

        </PlayoffContainer>
    )


}
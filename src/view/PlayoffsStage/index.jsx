import { useContext, useEffect, useState } from "react"
import { PlayoffContext } from "../../context/PlayoffContext"
import { createMatches } from "../../util/playoffResults"
import { RoundSection, MatchupDiv, PlayoffContainer, SpanResult } from "./style"
import './index.css';

export function PlayoffComponent() {

    const { playoffTeams } = useContext(PlayoffContext)

    const [roundEightTeams, setRoundEightTeams] = useState([]);
    const [quartersTeams, setQuartersTeams] = useState([]);
    const [semiTeams, setSemiTeams] = useState([]);

    const [teamsQualified, setTeamsQualified] = useState({
        round8: [],
        quarters: [],
        semi: [],
        finals: [],
        winner: {}
    })

    async function dealResults() {

        const result = await createMatches(playoffTeams, 'round8')
        console.log('result', result)

        setTeamsQualified(result)
    }

    useEffect(() => {
        dealResults()
    }, [])

    return (
        <PlayoffContainer>
            {
                <>
                    <RoundSection>
                        {
                            teamsQualified.round8.map((team, idx) => {
                                if (idx < 8 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3 className={team.round8.winner === true ? 'winner': 'loser' }>{team.name}</h3>
                                            <SpanResult>{team.round8?.goals} x {team.round8?.goalsTaken}</SpanResult>
                                            <h3 className={team.round8.winner === true ? 'loser': 'winner' }>{team.round8.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                    </RoundSection>
                    <RoundSection>

                        {
                            teamsQualified.quarters.map((team, idx) => {
                                if (idx < 4 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3 className={team.quarters.winner === true ? 'winner': 'loser' }>{team.name}</h3>
                                            <SpanResult>{team.quarters?.goals} x {team.quarters?.goalsTaken}</SpanResult>
                                            <h3 className={team.quarters.winner === true ? 'loser': 'winner' }>{team.quarters.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                    </RoundSection>
                    <RoundSection>

                        {
                            teamsQualified.semi.map((team, idx) => {
                                if (idx == 0 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3 className={team.semi.winner === true ? 'winner': 'loser' }>{team.name}</h3>
                                            <SpanResult>{team.semi?.goals} x {team.semi?.goalsTaken}</SpanResult>
                                            <h3 className={team.semi.winner === true ? 'loser': 'winner' }>{team.semi?.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                    </RoundSection>
                    <RoundSection>

                        {
                            teamsQualified.finals.map((team, idx) => {
                                if (idx == 0 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3 className={team.finals.winner === true ? 'winner': 'loser' }>{team.name}</h3>
                                            <SpanResult>{team.finals?.goals} x {team.finals?.goalsTaken}</SpanResult>
                                            <h3 className={team.finals.winner === true ? 'loser': 'winner' }>{team.finals.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                    </RoundSection>
                    <RoundSection>

                        {
                            teamsQualified.semi.map((team, idx) => {
                                if (idx == 2 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3 className={team.semi.winner === true ? 'winner': 'loser' }>{team.name}</h3>
                                            <SpanResult>{team.semi?.goals} x {team.semi?.goalsTaken}</SpanResult>
                                            <h3 className={team.semi.winner === true ? 'loser': 'winner' }>{team.semi.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                    </RoundSection>
                    <RoundSection>
                        {
                            teamsQualified.quarters.map((team, idx) => {
                                if (idx > 3 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3 className={team.quarters.winner === true ? 'winner': 'loser' }>{team.name}</h3>
                                            <SpanResult>{team.quarters?.goals} x {team.quarters?.goalsTaken}</SpanResult>
                                            <h3 className={team.quarters.winner === true ? 'loser': 'winner' }>{team.quarters?.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                    </RoundSection>
                    <RoundSection >
                        {
                            teamsQualified.round8.map((team, idx) => {

                                if (idx > 7 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3 className={team.round8.winner === true ? 'winner': 'loser' }>{team.name}</h3>
                                            <SpanResult>{team.round8?.goals} x {team.round8?.goalsTaken}</SpanResult>
                                            <h3 className={team.round8.winner === true ? 'loser': 'winner' }>{team.round8.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                    </RoundSection>
                </>
            }
        </PlayoffContainer>
    )


}
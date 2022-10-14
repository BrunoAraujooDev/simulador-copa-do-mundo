import { useContext, useEffect, useState } from "react"
import { PlayoffContext } from "../../context/PlayoffContext"
import { createMatches } from "../../util/playoffResults"
import { EightRoundSection, MatchupDiv, PlayoffContainer } from "./style"

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

        // setRoundEightTeams(qualifiedTeams)

        // if(roundEightTeams.length > 0){
        //     makeQuarterResults()
        // }
    }

    // async function makeQuarterResults() {

    //     console.log('roundEightTeams', roundEightTeams)
    //     const results = await makePlayoffResults(roundEightTeams, 'quarters')



    //     setQuartersTeams(results)

    //     if(quartersTeams.length > 0){
    //         makeSemisResults()
    //     }
    // }

    // async function makeSemisResults() {

    //     const result = await makePlayoffResults(quartersTeams, 'semi')

    //     setSemiTeams(result)
    //     makeFinalsResult()

    // }

    // function makeFinalsResult() {

    //     const result = makePlayoffResults(semiTeams, 'finals')

    //     setSemiTeams(result)
    // }

    useEffect(() => {
        dealResults()
    }, [])

    return (
        <PlayoffContainer>
            {
                <>
                    <EightRoundSection>
                        {
                            teamsQualified.round8.map((team, idx) => {
                                if (idx < 8 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3>{team.name}</h3>
                                            <h4>{team.round8?.goals}</h4>
                                            <span>X</span>
                                            <h4>{team.round8?.goalsTaken}</h4>
                                            <h3>{team.round8.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                        </EightRoundSection>
                        <EightRoundSection>

                            {
                                teamsQualified.quarters.map((team, idx) => {
                                    if (idx < 4 && (idx % 2 == 0)) {
                                        return (
                                            <MatchupDiv key={team.name}>
                                                <h3>{team.name}</h3>
                                                <h4>{team.quarters?.goals}</h4>
                                                <span>X</span>
                                                <h4>{team.quarters?.goalsTaken}</h4>
                                                <h3>{team.quarters.adversary}</h3>
                                            </MatchupDiv>
                                        )
                                    }
                                })
                            }
                        </EightRoundSection>
                        <EightRoundSection>

                            {
                                teamsQualified.semi.map((team, idx) => {
                                    if (idx == 0 && (idx % 2 == 0)) {
                                        return (
                                            <MatchupDiv key={team.name}>
                                                <h3>{team.name}</h3>
                                                <h4>{team.semi?.goals}</h4>
                                                <span>X</span>
                                                <h4>{team.semi?.goalsTaken}</h4>
                                                <h3>{team.semi?.adversary}</h3>
                                            </MatchupDiv>
                                        )
                                    }
                                })
                            }
                        </EightRoundSection>
                        <EightRoundSection>

                            {
                                teamsQualified.finals.map((team, idx) => {
                                    if (idx == 0 && (idx % 2 == 0)) {
                                        return (
                                            <MatchupDiv key={team.name}>
                                                <h3>{team.name}</h3>
                                                <h4>{team.finals?.goals}</h4>
                                                <span>X</span>
                                                <h4>{team.finals?.goalsTaken}</h4>
                                                <h3>{team.finals.adversary}</h3>
                                            </MatchupDiv>
                                        )
                                    }
                                })
                            }
                        </EightRoundSection>
                        <EightRoundSection>

                            {
                                teamsQualified.semi.map((team, idx) => {
                                    if (idx == 2 && (idx % 2 == 0)) {
                                        return (
                                            <MatchupDiv key={team.name}>
                                                <h3>{team.name}</h3>
                                                <h4>{team.semi?.goals}</h4>
                                                <span>X</span>
                                                <h4>{team.semi?.goalsTaken}</h4>
                                                <h3>{team.semi.adversary}</h3>
                                            </MatchupDiv>
                                        )
                                    }
                                })
                            }
                        </EightRoundSection>
                        {/*
                        <MatchupDiv>
                            <h3>{roundEightTeams[0].name}</h3>
                            <h4>{roundEightTeams[0]?.round8?.goals}</h4>
                            <span>X</span>
                            <h4>{roundEightTeams[1]?.round8?.goals}</h4>
                            <h3>{roundEightTeams[1].name}</h3>
                        </MatchupDiv>
                         <MatchupDiv>
                            <h3>{roundEightTeams[2].name}</h3>
                            <h4>{roundEightTeams[2]?.round8?.goals}</h4>
                            <span>X</span>
                            <h4>{roundEightTeams[3]?.round8?.goals}</h4>
                            <h3>{roundEightTeams[3].name}</h3>
                        </MatchupDiv>
                        <MatchupDiv>
                            <h3>{roundEightTeams[4].name}</h3>
                            <h4>{roundEightTeams[4]?.round8?.goals}</h4>
                            <span>X</span>
                            <h4>{roundEightTeams[5]?.round8?.goals}</h4>
                            <h3>{roundEightTeams[5].name}</h3>
                        </MatchupDiv>
                        <MatchupDiv>
                            <h3>{roundEightTeams[6].name}</h3>
                            <h4>{roundEightTeams[6]?.round8?.goals}</h4>
                            <span>X</span>
                            <h4>{roundEightTeams[7]?.round8?.goals}</h4>
                            <h3>{roundEightTeams[7].name}</h3>
                        </MatchupDiv> */}
                    <EightRoundSection>
                        {
                            teamsQualified.quarters.map((team, idx) => {
                                if (idx > 3 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3>{team.name}</h3>
                                            <h4>{team.quarters?.goals}</h4>
                                            <span>X</span>
                                            <h4>{team.quarters?.goalsTaken}</h4>
                                            <h3>{team.quarters?.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                    </EightRoundSection>
                    <EightRoundSection >
                        {
                            teamsQualified.round8.map((team, idx) => {

                                if (idx > 7 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3>{team.name}</h3>
                                            <h4>{team.round8?.goals}</h4>
                                            <span>X</span>
                                            <h4>{team.round8?.goalsTaken}</h4>
                                            <h3>{team.round8.adversary}</h3>
                                        </MatchupDiv>
                                    )
                                }
                            })
                        }
                        {/* <MatchupDiv>
                            <h3>{roundEightTeams[8].name}</h3>
                            <h4>{roundEightTeams[8]?.round8?.goals}</h4>
                            <span>X</span>
                            <h4>{roundEightTeams[9]?.round8?.goals}</h4>
                            <h3>{roundEightTeams[9].name}</h3>
                        </MatchupDiv>
                        <MatchupDiv>
                            <h3>{roundEightTeams[10].name}</h3>
                            <h4>{roundEightTeams[10]?.round8?.goals}</h4>
                            <span>X</span>
                            <h4>{roundEightTeams[11]?.round8?.goals}</h4>
                            <h3>{roundEightTeams[11].name}</h3>
                        </MatchupDiv>
                        <MatchupDiv>
                            <h3>{roundEightTeams[12].name}</h3>
                            <h4>{roundEightTeams[12]?.round8?.goals}</h4>
                            <span>X</span>
                            <h4>{roundEightTeams[13]?.round8?.goals}</h4>
                            <h3>{roundEightTeams[13].name}</h3>
                        </MatchupDiv>
                        <MatchupDiv>
                            <h3>{roundEightTeams[14].name}</h3>
                            <h4>{roundEightTeams[14]?.round8?.goals}</h4>
                            <span>X</span>
                            <h4>{roundEightTeams[15]?.round8?.goals}</h4>
                            <h3>{roundEightTeams[15].name}</h3>
                        </MatchupDiv> */}
                    </EightRoundSection>
                </>
            }
        </PlayoffContainer>
    )


}
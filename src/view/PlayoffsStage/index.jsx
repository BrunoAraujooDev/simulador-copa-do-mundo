import { useContext, useEffect, useState } from "react"
import { PlayoffContext } from "../../context/PlayoffContext"
import { createMatches } from "../../util/playoffResults"
import { RoundSection, MatchupDiv, PlayoffContainer, SpanResult, SpanPenalty, SendButton, ImgFlag, FigureFlag } from "./style"
import './index.css';
import { Trophy } from "phosphor-react";


export function PlayoffComponent() {

    const { playoffTeams } = useContext(PlayoffContext)


    const [teamsQualified, setTeamsQualified] = useState({
        round8: [],
        quarters: [],
        semi: [],
        finals: [],
        winner: {}
    })

    const [winner, setWinner] = useState({});

    async function dealResults() {

        const result =  createMatches(playoffTeams, 'round8')

        setTeamsQualified(result)

    }

    async function sendResult(){

        const idx = await teamsQualified.finals.findIndex(item => item.finals.winner === true)

        let penaltiA = teamsQualified.finals[idx].finals.penalty == true ? teamsQualified.finals[idx].finals.penaltyResult.goals : 0
        let penaltiB = teamsQualified.finals[idx].finals.penalty == true ? teamsQualified.finals[idx].finals.penaltyResult.goalsTaken : 0
        
        let champion = {
            "equipeA": teamsQualified.finals[idx].name,
            "flag": teamsQualified.finals[idx].flag,
            "equipeB": teamsQualified.finals[idx].finals.adversary,
            "golsEquipeA": teamsQualified.finals[idx].finals.goals,
            "golsEquipeB": teamsQualified.finals[idx].finals.goalsTaken,
            "golsPenaltyTimeA": penaltiA,
            "golsPenaltyTimeB": penaltiB,
        }

        setWinner(champion);
        
    }

    useEffect(() => {
        dealResults()
    }, [])

    return (
        <PlayoffContainer>
            <FigureFlag>
                {teamsQualified.winner[0] != [] ? 
                <ImgFlag src={teamsQualified.winner[0]?.flag || ""} alt="World cup winner flag" />
                : <Trophy size={32} weight="bold" />}
                
                <figcaption>{teamsQualified.winner[0].name || ""}</figcaption>
            </FigureFlag>
            
            {
                <>
                    <RoundSection>
                        {
                            teamsQualified.round8.map((team, idx) => {
                                if (idx < 8 && (idx % 2 == 0)) {
                                    return (
                                        <MatchupDiv key={team.name}>
                                            <h3 className={team.round8.winner === true ? 'winner' : 'loser'}>{team.name}</h3>
                                            <SpanResult>{team.round8?.goals} x {team.round8?.goalsTaken}</SpanResult>
                                            <SpanPenalty>
                                                {team.round8.penalty == true && 'Penalidades: '}
                                                {team.round8.penalty == true && team.round8.penaltyResult.goals}
                                                {team.round8.penalty == true && 'x'}
                                                {team.round8.penalty == true && team.round8.penaltyResult.goalsTaken}
                                            </SpanPenalty>
                                            <h3 className={team.round8.winner === true ? 'loser' : 'winner'}>{team.round8.adversary}</h3>
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
                                            <h3 className={team.quarters.winner === true ? 'winner' : 'loser'}>{team.name}</h3>
                                            <SpanResult>{team.quarters?.goals} x {team.quarters?.goalsTaken}</SpanResult>
                                                <SpanPenalty>
                                                    {team.quarters.penalty == true && 'Penalidades: '}
                                                    {team.quarters.penalty == true && team.quarters.penaltyResult.goals}
                                                    {team.quarters.penalty == true && 'x'}
                                                    {team.quarters.penalty == true && team.quarters.penaltyResult.goalsTaken}
                                                </SpanPenalty>
                                                <h3 className={team.quarters.winner === true ? 'loser' : 'winner'}>{team.quarters.adversary}</h3>
                                           
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
                                            <h3 className={team.semi.winner === true ? 'winner' : 'loser'}>{team.name}</h3>
                                            <SpanResult>{team.semi?.goals} x {team.semi?.goalsTaken}</SpanResult>
                                                <SpanPenalty>
                                                    {team.semi.penalty == true && 'Penalidades: '}
                                                    {team.semi.penalty == true && team.semi.penaltyResult.goals}
                                                    {team.semi.penalty == true && 'x'}
                                                    {team.semi.penalty == true && team.semi.penaltyResult.goalsTaken}
                                                </SpanPenalty>
                                                <h3 className={team.semi.winner === true ? 'loser' : 'winner'}>{team.semi?.adversary}</h3> 
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
                                            <h3 className={team.finals.winner === true ? 'winner' : 'loser'}>{team.name}</h3>
                                            <SpanResult>{team.finals?.goals} x {team.finals?.goalsTaken}</SpanResult>
                                                <SpanPenalty>
                                                    {team.finals.penalty == true && 'Penalidades: '}
                                                    {team.finals.penalty == true && team.finals.penaltyResult.goals}
                                                    {team.finals.penalty == true && 'x'}
                                                    {team.finals.penalty == true && team.finals.penaltyResult.goalsTaken}
                                                </SpanPenalty>
                                                <h3 className={team.finals.winner === true ? 'loser' : 'winner'}>{team.finals.adversary}</h3>
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
                                            <h3 className={team.semi.winner === true ? 'winner' : 'loser'}>{team.name}</h3>
                                            <SpanResult>{team.semi?.goals} x {team.semi?.goalsTaken}</SpanResult>
                                                <SpanPenalty>
                                                    {team.semi.penalty == true && 'Penalidades: '}
                                                    {team.semi.penalty == true && team.semi.penaltyResult.goals}
                                                    {team.semi.penalty == true && 'x'}
                                                    {team.semi.penalty == true && team.semi.penaltyResult.goalsTaken}
                                                </SpanPenalty>
                                                <h3 className={team.semi.winner === true ? 'loser' : 'winner'}>{team.semi.adversary}</h3>
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
                                            <h3 className={team.quarters.winner === true ? 'winner' : 'loser'}>{team.name}</h3>
                                            <SpanResult>{team.quarters?.goals} x {team.quarters?.goalsTaken}</SpanResult>
                                                <SpanPenalty>
                                                    {team.quarters.penalty == true && 'Penalidades: '}
                                                    {team.quarters.penalty == true && team.quarters.penaltyResult.goals}
                                                    {team.quarters.penalty == true && 'x'}
                                                    {team.quarters.penalty == true && team.quarters.penaltyResult.goalsTaken}
                                                </SpanPenalty>
                                                <h3 className={team.quarters.winner === true ? 'loser' : 'winner'}>{team.quarters?.adversary}</h3>  
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
                                            <h3 className={team.round8.winner === true ? 'winner' : 'loser'}>{team.name}</h3>
                                                <SpanResult>{team.round8?.goals} x {team.round8?.goalsTaken}</SpanResult>
                                                <SpanPenalty>
                                                    {team.round8.penalty == true && 'Penalidades: '}
                                                    {team.round8.penalty == true && team.round8.penaltyResult.goals}
                                                    {team.round8.penalty == true && 'x'}
                                                    {team.round8.penalty == true && team.round8.penaltyResult.goalsTaken}
                                                </SpanPenalty>
                                            <h3 className={team.round8.winner === true ? 'loser' : 'winner'}>{team.round8.adversary}</h3>
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
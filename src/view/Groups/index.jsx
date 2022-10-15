import { ArrowFatDown, ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlayoffContext } from "../../context/PlayoffContext";
import { createGroups, makeResultsForEachGroup, sortGroupByPoints } from "../../util/createResults";
import { getAllTeams } from "../../util/getServices";
import { ButtonChangeRound, GroupsContainer, GroupsLayout, LoadingMessage, MatchDiv, MatchesDiv, ResultsDiv, RoundText, RoundButtonsDiv, TableGroups, ChangePageButton } from "./style";


export function Groups() {

    const { handleMatchUps } = useContext(PlayoffContext)

    const [tableGroups, setTableGroups] = useState([]);
    const [round, setRound] = useState(1);



    async function getCountries() {
        const teams = await getAllTeams()
        let data = []

        data = await teams.Result.map(item => {

            return {
                token: item.Token,
                name: item.Name,
                points: 0,
                matches: 3,
                victory: 0,
                draw: 0,
                defeat: 0,
                goalsPro: 0,
                games: []
            }
        })

        const transformedArrayData = await getResults(data)
        let groupsWithResults = await makeResultsForEachGroup(transformedArrayData)
        let sortedGroups = await sortGroupByPoints(groupsWithResults)

        return sortedGroups
    }

    function getResults(teams) {

        const groups = createGroups(teams)

        return groups

    }

    function handleNextPlayoffStage(){

        handleMatchUps(tableGroups)
    }


    useEffect(() => {

        getCountries().then((data) => setTableGroups(data))


    }, [])

    return (
        <GroupsLayout>


            <ResultsDiv>
                <RoundButtonsDiv>
                    { (round > 1 && tableGroups.length > 0) &&
                        <ButtonChangeRound type='button' onClick={() => setRound(state => state - 1)}>
                            <ArrowLeft size={28} weight="fill" />
                        </ButtonChangeRound>
                    }
                    {tableGroups.length > 0 &&
                        <RoundText ><p>{round} rodada</p> </RoundText>
                    }

                    {
                        (round !== 3 && tableGroups.length > 0) &&
                        <ButtonChangeRound type='button' onClick={() => setRound(state => state + 1)}>
                            <ArrowRight size={28} weight="fill" />
                        </ButtonChangeRound>
                    }
                </RoundButtonsDiv>
                <MatchesDiv>
                    {


                        tableGroups.map(group => {
                            return group.map((team, index) => {
                                if ((index == 0 || index == 2) && round == 1) {

                                    let idx = team.games.findIndex(item => item.hasOwnProperty('gameOne'))
    
                                    return (
                                        <MatchDiv key={team.name + round}>
                                            <span>{team?.name} </span>
                                            
                                            <span>{team?.games[idx].gameOne?.goals}  X {team?.games[idx].gameOne?.goalsTaken}</span>    
                                             {team?.games[idx].gameOne?.adversary}
                                        </MatchDiv>
                                    )
                                }

                                if (round == 2 && (index == 0 || index == 1)) {
                                    let idx = team.games.findIndex(item => item.hasOwnProperty('gameTwo'))
                                    return (
                                        <MatchDiv key={team.name + round}>
                                            {team?.name} 
                                            <span>{team?.games[idx].gameTwo?.goals}  X {team?.games[idx].gameTwo?.goalsTaken}</span>   
                                            {team?.games[idx].gameTwo?.adversary}
                                        </MatchDiv>
                                    )
                                }

                                if (round == 3 && (index == 0 || index == 1)) {
                                    let idx = team.games.findIndex(item => item.hasOwnProperty('gameThree'))
                                    return (
                                        <MatchDiv key={team.name + round}>
                                            {team?.name} 
                                            <span>{team?.games[idx].gameThree?.goals}  X {team?.games[idx].gameThree?.goalsTaken}</span>   
                                             {team?.games[idx].gameThree?.adversary}
                                        </MatchDiv>
                                    )
                                }
                            })


                        })}
                </MatchesDiv>



            </ResultsDiv>


            <GroupsContainer>
                {
                    tableGroups.length > 0 ?
                        tableGroups.map((group, index) => {
                            return (
                                <TableGroups key={index}>
                                    <thead>
                                        <tr>
                                            <th>Classificação</th>
                                            <th>J</th>
                                            <th>P</th>
                                            <th>V</th>
                                            <th>E</th>
                                            <th>D</th>
                                            <th>GP</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            group.map((country, idx) => {
                                                return (
                                                    <tr key={idx}>
                                                        <td style={{ borderRight: '1px solid #E39B32' }}>{idx + 1}  {country.name}</td>
                                                        <td>{country.matches}</td>
                                                        <td>{country.points}</td>
                                                        <td>{country.victory}</td>
                                                        <td>{country.draw}</td>
                                                        <td>{country.defeat}</td>
                                                        <td>{country.goalsPro}</td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </TableGroups>
                            )
                        })
                        :
                        <LoadingMessage>Carregando...</LoadingMessage>
                }

            </GroupsContainer>
            <Link to='/playoffs'>
                <ChangePageButton type='button' onClick={handleNextPlayoffStage}>
                    Mata-mata
                    <ArrowFatDown size={25} weight="fill" />
                </ChangePageButton>
            </Link>
        </GroupsLayout>
    )
}
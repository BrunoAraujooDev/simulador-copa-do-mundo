import { useEffect, useState } from "react";
import { createGroups, makeResultsForEachGroup, sortGroupByPoints } from "../../util/createResults";
import { getAllTeams } from "../../util/getServices";
import { GroupsContainer, GroupsLayout, LoadingMessage, ResultsDiv, RoundButton, TableGroups } from "./style";


const time = { "Status": 200, "Result": [{ "Token": "82d9e5fd-edc4-494b-a42b-6f0f8847a77b", "Name": "Qatar" }, { "Token": "b18e8f55-3477-4d76-bb1a-811132eb25fc", "Name": "Equador" }, { "Token": "2a8411b8-bacb-444c-91a2-1bf16e37684c", "Name": "Senegal" }, { "Token": "6ca272b3-48a7-4e11-a2f4-79be4c038c24", "Name": "Holanda" }, { "Token": "f57dbf70-3534-4096-a6ac-75b9f0fd0868", "Name": "Inglaterra" }, { "Token": "4a0e878a-e85f-404d-b0ae-3e5bc7b0cabd", "Name": "Iran" }, { "Token": "cb109aa5-3449-4904-9d54-c65fdadd6f71", "Name": "Estados Unidos" }, { "Token": "8a228530-c050-4213-ba46-d02b85845ae1", "Name": "País de Gales" }, { "Token": "97e23115-c6c6-4ac8-aa75-b01332d31424", "Name": "Argentina" }, { "Token": "23e7c473-9819-4844-9aaa-c6b68d013842", "Name": "Arábia Saudita" }, { "Token": "744c7a0a-d326-481d-b8de-8c91f6990295", "Name": "México" }, { "Token": "b387e0f8-4a34-482a-abdb-7357998c2873", "Name": "Polônia" }, { "Token": "1946b14d-c2f6-4b3a-baeb-fe60b3d1e030", "Name": "França" }, { "Token": "46cae0a0-d78a-42fb-9584-b78e374a5c3e", "Name": "Austrália" }, { "Token": "1159bb76-4d77-4fa8-908b-a7334325208b", "Name": "Dinamarca" }, { "Token": "9721785f-48f0-4c1e-8b8e-5854a54e109f", "Name": "Tunísia" }, { "Token": "985b3c37-4111-402c-bf2c-5fad6b976940", "Name": "Espanha" }, { "Token": "e8f73110-8929-4e30-b711-76472014af79", "Name": "Costa Rica" }, { "Token": "f5a74a52-f8c7-4da0-9a7d-848afa58366c", "Name": "Alemanha" }, { "Token": "bbb95af0-5c21-4494-b55f-b37e785e16a7", "Name": "Japão" }, { "Token": "794019b5-c845-4b39-9658-a83fda947e85", "Name": "Bélgica" }, { "Token": "21982426-7a9c-4a51-953e-4978fe02d7da", "Name": "Canadá" }, { "Token": "135e56ab-037b-40b2-bc8e-1941b8b35e78", "Name": "Marrocos" }, { "Token": "c8492f9b-c230-4da0-88c9-6d7f0b901cd5", "Name": "Croácia" }, { "Token": "9e0921bc-e658-4f10-8bf0-f6ee5b4abb30", "Name": "Brasil" }, { "Token": "4c4c57da-60cd-4732-ba7c-51dc6e11d627", "Name": "Sérvia" }, { "Token": "7c863f8d-fbb8-4f42-a9d3-9c3c6eb96d6c", "Name": "Suiça" }, { "Token": "54771621-dfa0-4d16-bfdc-c16cfb024219", "Name": "Camarões" }, { "Token": "c7b3cae2-7a0d-4114-b0dc-edfc38908bad", "Name": "Portugal" }, { "Token": "ca68d96d-e626-4d35-bf5e-eb3afc9962d8", "Name": "Gana" }, { "Token": "6b8b0ee1-0609-498b-a91b-de0b31d83a3c", "Name": "Uruguai" }, { "Token": "11b7d570-adae-40e6-b51b-20c6bbbd837d", "Name": "Coreia do Sul" }], "Error": false }


const numeroRodadas = {
    um: 'gameOne',
    dois: 'gameTwo',
    tres: 'gameThree'
}

export function Groups() {

    const [tableGroups, setTableGroups] = useState([]);
    const [round, setRound] = useState(1);


    async function getCountries() {
        // const teams = await getAllTeams()


        const data = []
        await time.Result.map(item => {

            data.push( {
                token: item.Token,
                name: item.Name,
                points: 0,
                matches: 3,
                victory: 0,
                draw: 0,
                defeat: 0,
                goalsPro: 0,
                games: [
                    // {
                    //     gameOne: {
                    //         winner: false,
                    //         adversary: '',
                    //         goals: 0,
                    //         goalsTaken: 0
                    //     }
                    // },
                    // {
                    //     gameTwo: {
                    //         winner: false,
                    //         adversary: '',
                    //         goals: 0,
                    //         goalsTaken: 0
                    //     }
                    // },
                    // {
                    //     gameThree: {
                    //         winner: false,
                    //         adversary: '',
                    //         goals: 0,
                    //         goalsTaken: 0
                    //     }
                    // }
                ]
            })
        })

        const transformedArrayData = await getResults(data)
        // console.log('transformedArrayData', transformedArrayData)
        let groupsWithResults = await makeResultsForEachGroup(transformedArrayData)
        let sortedGroups = await sortGroupByPoints(groupsWithResults)

        setTableGroups(sortedGroups)
    }

    function getResults(teams) {

        const groups = createGroups(teams)

        return groups

    }


    useEffect(() => {
        getCountries()
    }, [])

    return (
        <GroupsLayout>
            

            <ResultsDiv>
                <RoundButton>{round} rodada </RoundButton>
                {/* {
                    tableGroups &&

                    tableGroups.map(group => {
                        group.map((team, index) => {
                            console.log('team', team)

                            
                            if(index == 0 || index == 2){
                                return (
                                    <div>
                                        <div>
                                            {team?.name} {team?.games[numeroRodadas[round]].goals} 
                                            X 
                                            {team?.games[numeroRodadas[round]]?.goalsTaken} {team?.games[numeroRodadas[round]].adversary} 
                                        </div>
                                    </div>
                                )
                            }
                        })
                        
                        
                    })} */}
                

            </ResultsDiv>
            

            <GroupsContainer>
                {
                    tableGroups ?
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
                                                        <td style={{borderRight: '1px solid #CCCCC8'}}>{idx + 1}  {country.name}</td>
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
        </GroupsLayout>
    )
}
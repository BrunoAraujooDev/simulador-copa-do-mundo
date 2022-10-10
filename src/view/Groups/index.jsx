import { useEffect, useState } from "react";
import { getAllTeams } from "../../util/getServices";


export function Groups() {

    const [countries, setCountries] = useState([{
        name: 'Team not found',
        matches: 3,
        victory: 0,
        draw: 0,
        defeat: 0,
        goalsPro: 0
    }]);


    async function getCountries() {
        const teams = await getAllTeams()
        console.log('teams', teams)

        const data = teams.Result.map(item => {

            return {
                name: item.Name,
                matches: 3,
                victory: 0,
                draw: 0,
                defeat: 0,
                goalsPro: 0
            }
        })

        setCountries(data)
    }


    useEffect(() => {
        getCountries()
    }, [])

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>J</th>
                        <th>V</th>
                        <th>E</th>
                        <th>D</th>
                        <th>GP</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.map(country => {
                            return (
                                <tr key={country.name}>
                                    <td>{country.name}</td>
                                    <td>{country.matches}</td>
                                    <td>{country.victory}</td>
                                    <td>{country.draw}</td>
                                    <td>{country.defeat}</td>
                                    <td>{country.goalsPro}</td>
                                </tr>
                            )
                        })
                    }
                    {/* <tr>
                        <td>Brasil</td>
                        <td>3</td>
                        <td>9</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>10</td>
                    </tr> 
                     <tr>
                        <td>Argentina</td>
                        <td>3</td>
                        <td>6</td>
                        <td>3</td>
                        <td>0</td>
                        <td>1</td>
                        <td>10</td>
                    </tr> */}
                </tbody>
            </table>
        </section>
    )
}
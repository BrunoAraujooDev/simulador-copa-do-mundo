export function createMatches(teams) {

    let round8, quarters, semi, finals, winner;

    round8 = makePlayoffResults(teams, 'round8');

    let auxQuarters = filterTeams(round8, 'round8');

    quarters = makePlayoffResults(auxQuarters, 'quarters');

    let auxSemi = filterTeams(quarters, 'quarters');

    semi = makePlayoffResults(auxSemi, 'semi');

    let auxFinals = filterTeams(semi, 'semi');

    finals = makePlayoffResults(auxFinals, 'finals');

    winner = filterTeams(finals, 'finals');


    return {
        round8, 
        quarters, 
        semi, 
        finals, 
        winner
    }


}

function makePlayoffResults(teams, type) {

    for (let i = 0; i < teams.length; i++) {

        let resulta = Math.floor(Math.random() * (7));
        let resultb = Math.floor(Math.random() * (7));

        

        if (resulta > resultb) {

            teams[i] = {
                name: teams[i]?.name,
                flag: teams[i]?.flag,
                matches: 3,
                points: teams[i]?.points,
                victory: teams[i]?.victory,
                draw: teams[i]?.draw,
                defeat: teams[i]?.defeat,
                goalsPro: teams[i]?.goalsPro,
                games: teams[i]?.games,
                [type]: {
                    goals: resulta,
                    goalsTaken: resultb,
                    penalty: false,
                    adversary: teams[i + 1]?.name,
                    winner: true
                }

            }


            teams[i + 1] = {
                name: teams[i + 1]?.name,
                flag: teams[i + 1]?.flag,
                matches: 3,
                points: teams[i + 1]?.points,
                victory: teams[i + 1]?.victory,
                draw: teams[i + 1]?.draw,
                defeat: teams[i + 1]?.defeat,
                goalsPro: teams[i + 1]?.goalsPro,
                games: teams[i + 1]?.games,
                [type]: {
                    goals: resultb,
                    goalsTaken: resulta,
                    penalty: false,
                    adversary: teams[i]?.name,
                    winner: false
                }

            }
        }

        if (resultb > resulta) {

            teams[i] = {
                name: teams[i]?.name,
                flag: teams[i]?.flag,
                matches: 3,
                points: teams[i]?.points,
                victory: teams[i]?.victory,
                draw: teams[i]?.draw,
                defeat: teams[i]?.defeat,
                goalsPro: teams[i]?.goalsPro,
                games: teams[i]?.games,
                [type]: {
                    goals: resulta,
                    goalsTaken: resultb,
                    penalty: false,
                    adversary: teams[i + 1]?.name,
                    winner: false
                }

            }

            teams[i + 1] = {
                name: teams[i + 1]?.name,
                flag: teams[i + 1]?.flag,
                matches: 3,
                points: teams[i + 1]?.points,
                victory: teams[i + 1]?.victory,
                draw: teams[i + 1]?.draw,
                defeat: teams[i + 1]?.defeat,
                goalsPro: teams[i + 1]?.goalsPro,
                games: teams[i + 1]?.games,
                [type]: {
                    goals: resultb,
                    goalsTaken: resulta,
                    penalty: false,
                    adversary: teams[i]?.name,
                    winner: true
                }

            }


        }

        if (resulta == resultb) {

            let penaltya = Math.floor(Math.random() * (5 - 3) + 3);
            let penaltyb = Math.floor(Math.random() * (5 - 3) + 3);

            if ((penaltya == penaltyb) && penaltya == 5) {
                penaltya = Math.floor(Math.random() * (9 - 6) + 6);
            } else {
                penaltyb = 5
            }


            teams[i] = {
                name: teams[i]?.name,
                flag: teams[i]?.flag,
                matches: 3,
                points: teams[i]?.points,
                victory: teams[i]?.victory,
                draw: teams[i]?.draw,
                defeat: teams[i]?.defeat,
                goalsPro: teams[i]?.goalsPro,
                games: teams[i]?.games,
                [type]: {
                    goals: resulta,
                    goalsTaken: resultb,
                    penalty: true,
                    adversary: teams[i + 1]?.name,
                    winner: penaltya > penaltyb ? true : false,
                    penaltyResult: {
                        goals: penaltya,
                        goalsTaken: penaltyb
                    }
                }

            }

            teams[i + 1] = {
                name: teams[i + 1]?.name,
                flag: teams[i + 1]?.flag,
                matches: 3,
                points: teams[i + 1]?.points,
                victory: teams[i + 1]?.victory,
                draw: teams[i + 1]?.draw,
                defeat: teams[i + 1]?.defeat,
                goalsPro: teams[i + 1]?.goalsPro,
                games: teams[i + 1]?.games,
                [type]: {
                    goals: resultb,
                    goalsTaken: resulta,
                    penalty: true,
                    adversary: teams[i]?.name,
                    winner: penaltyb > penaltya ? true : false,
                    penaltyResult: {
                        goals: penaltyb,
                        goalsTaken: penaltya
                    }
                }
            }

        }
        i++
    }

    return teams;
}

function filterTeams(teams, filteredProp) {

    let data = teams.filter((item) => {
        return item[filteredProp].winner === true
    })

    return data
}
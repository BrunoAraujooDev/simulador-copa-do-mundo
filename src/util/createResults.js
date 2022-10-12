/*export function createGroups(teams) {
    const MAX_TEAMS = 4;
    const groups = [];
    while (teams.length > 0) {
        const group = [];
        for (let i = 0; i < MAX_TEAMS; i++) {
            const index = Math.floor(Math.random() * teams.length);
            group.push(teams[index]);
            teams.splice(index, 1);
        }
        groups.push(group);
    }
    console.log('groups', groups)

    return groups;
}*/

export function createGroups(teams) {
    let groups = [];
    let group;
    const MAX_GROUP_NUMBERS = 8
    const MAX_GROUP_MEMBERS = 4

    for (let i = 0; i < MAX_GROUP_NUMBERS; i++) {
        group = [];
        for (let j = 0; j < MAX_GROUP_MEMBERS; j++) {
            let position = Math.floor(Math.random() * (teams.length));
            group.push((teams[position]));
            teams.splice(position, 1);
        }
        groups.push(group);
    }

    return groups
}



/*export function createGroups(teams) {
    
    let auxArray = teams;
    
    const teamsArray = [[], [], [], [], [], [], [], []]
    
    
    for (let i = 0; i < teams.length; i++) {
        
        let position = Math.floor(Math.random() * (8));

        if (teamsArray[position].length < 4) {
            teamsArray[position].push(teams[i])
            
            
        } else {
            let index = teamsArray.findIndex(item => item.length < 4)
            
            teamsArray[index].push(teams[i])
            
        }
        
    }
    
    console.log( teamsArray)
   
    
    for (let i = 0; i < teamsArray.length; i++) {

        for (let j = 0; j < teams.length; j++) {

             teamsArray[i].map(team => {
                console.log('team', team)
                

                if (teams[j].name == team.name) {
                    
                    auxArray.splice(j, 1)
                }
            })

        }
    }


    // console.log('auxArray', auxArray)


    const results = makeResultsForEachGroup(teamsArray)

    const sortedGroups = sortGroupByPoints(results)

    return sortedGroups



}*/

// cria o resultado de cada confronto

export function makeResultsForEachGroup(groups) {
    console.log('groups1', groups)


    for (let i = 0; i < groups.length; i++) {

        let group = groups[i]
        let matches = 3

        for (let j = 0; j < matches; j++) {

           

            if (j == 0) {

                let round = [ 'gameOne',
                    'gameTwo',
                    'gameThree']

                    // let rounds = {gameOne: 'gameOne',
                    //     gameTwo: 'gameTwo',
                    //     gameThree: 'gameThree'}
                   
                

                for(let k = 1; k <= 3; k++){

                    let resulta = Math.floor(Math.random() * (7));
                    let resultb = Math.floor(Math.random() * (7));

                    let team = group[j]
                    let teamb = group[j+k]

                    if (resulta > resultb) {

                        // let foundRound = (k - 1) !== 0 ? ((k - 1) === 1 ? round[k-1] : round[k  - 1]) : round[k-1]

                        groups[i][j] = {
                            token: team.Token,
                            name: team.Name,
                            points: team.points + 3,
                            matches: 3,
                            victory: team.victory + 1,
                            draw: team.draw,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                [round[k-1]]: {
                                    winner: true,
                                    adversary: teamb.Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][j+k] = {
                            token: teamb.Token,
                            name: teamb.Name,
                            matches: 3,
                            points: teamb.points,
                            victory: teamb.victory,
                            draw: teamb.draw,
                            defeat: teamb.defeat + 1,
                            goalsPro: teamb.goalsPro + (resultb - resulta),
                            games: [...teamb.games, {
                                [round[k-1]]: {
                                    winner: false,
                                    adversary: team.Name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else if (resulta == resultb) {
                        groups[i][j] = {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            points: team.points + 1,
                            victory: team.victory,
                            draw: team.draw + 1,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                [round[k-1]]: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][j+k] = {
                            token: teamb.Token,
                            name: teamb.Name,
                            matches: 3,
                            points: teamb.points + 1,
                            victory: teamb.victory,
                            draw: teamb.draw + 1,
                            defeat: teamb.defeat,
                            goalsPro: teamb.goalsPro + (resultb - resulta),
                            games: [...teamb.games, {
                                [round[k-1]]: {
                                    winner: false,
                                    adversary: team.Name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else {
                        groups[i][j] = {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            points: team.points,
                            victory: team.victory,
                            draw: team.draw,
                            defeat: team.defeat + 1,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                [round[k-1]]: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][j+k] = {
                            token: teamb.Token,
                            name: teamb.Name,
                            matches: 3,
                            points: teamb.points + 3,
                            victory: teamb.victory + 1,
                            draw: teamb.draw,
                            defeat: teamb.defeat,
                            goalsPro: teamb.goalsPro + (resultb - resulta),
                            games: [...teamb.games, {
                                [round[k-1]]: {
                                    winner: true,
                                    adversary: team.Name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    }



                }


            } else if(j == 1){

                let round = [
                    'gameTwo',
                    'gameThree']

                for(let k = 1; k <= 2; k++){

                    let resulta = Math.floor(Math.random() * (7));
                    let resultb = Math.floor(Math.random() * (7));

                    let team = group[j]
                    let teamb = group[j+k]

                    if (resulta > resultb) {

                        groups[i][j] = {
                            token: team.Token,
                            name: team.Name,
                            points: team.points + 3,
                            matches: 3,
                            victory: team.victory + 1,
                            draw: team.draw,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                [round[k-1]]: {
                                    winner: true,
                                    adversary: teamb.Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][j+k] = {
                            token: teamb.Token,
                            name: teamb.Name,
                            matches: 3,
                            points: teamb.points,
                            victory: teamb.victory,
                            draw: teamb.draw,
                            defeat: teamb.defeat + 1,
                            goalsPro: teamb.goalsPro + (resultb - resulta),
                            games: [...teamb.games, {
                                [round[k-1]]: {
                                    winner: false,
                                    adversary: team.Name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else if (resulta == resultb) {
                        groups[i][j] = {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            points: team.points + 1,
                            victory: team.victory,
                            draw: team.draw + 1,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                [round[k-1]]: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][j+k] = {
                            token: teamb.Token,
                            name: teamb.Name,
                            matches: 3,
                            points: teamb.points + 1,
                            victory: teamb.victory,
                            draw: teamb.draw + 1,
                            defeat: teamb.defeat,
                            goalsPro: teamb.goalsPro + (resultb - resulta),
                            games: [...teamb.games, {
                                [round[k-1]]: {
                                    winner: false,
                                    adversary: team.Name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else {
                        groups[i][j] = {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            points: team.points,
                            victory: team.victory,
                            draw: team.draw,
                            defeat: team.defeat + 1,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                [round[k-1]]: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][j+k] = {
                            token: teamb.Token,
                            name: teamb.Name,
                            matches: 3,
                            points: teamb.points + 3,
                            victory: teamb.victory + 1,
                            draw: teamb.draw,
                            defeat: teamb.defeat,
                            goalsPro: teamb.goalsPro + (resultb - resulta),
                            games: [...teamb.games, {
                                [round[k-1]]: {
                                    winner: true,
                                    adversary: team.Name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    }



                }

            } else {

                let k = 1;

                let resulta = Math.floor(Math.random() * (7));
                let resultb = Math.floor(Math.random() * (7));

                    let team = group[j]
                    let teamb = group[j+k]

                    if (resulta > resultb) {

                        groups[i][j] = {
                            token: team.Token,
                            name: team.Name,
                            points: team.points + 3,
                            matches: 3,
                            victory: team.victory + 1,
                            draw: team.draw,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                gameThree: {
                                    winner: true,
                                    adversary: teamb.Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][j+k] = {
                            token: teamb.Token,
                            name: teamb.Name,
                            matches: 3,
                            points: teamb.points,
                            victory: teamb.victory,
                            draw: teamb.draw,
                            defeat: teamb.defeat + 1,
                            goalsPro: teamb.goalsPro + (resultb - resulta),
                            games: [...teamb.games, {
                                gameThree: {
                                    winner: false,
                                    adversary: team.Name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else if (resulta == resultb) {
                        groups[i][j] = {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            points: team.points + 1,
                            victory: team.victory,
                            draw: team.draw + 1,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                gameThree: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][j+k] = {
                            token: teamb.Token,
                            name: teamb.Name,
                            matches: 3,
                            points: teamb.points + 1,
                            victory: teamb.victory,
                            draw: teamb.draw + 1,
                            defeat: teamb.defeat,
                            goalsPro: teamb.goalsPro + (resultb - resulta),
                            games: [...teamb.games, {
                                gameThree: {
                                    winner: false,
                                    adversary: team.Name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else {
                        groups[i][j] = {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            points: team.points,
                            victory: team.victory,
                            draw: team.draw,
                            defeat: team.defeat + 1,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                gameThree: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][j+k] = {
                            token: teamb.Token,
                            name: teamb.Name,
                            matches: 3,
                            points: teamb.points + 3,
                            victory: teamb.victory + 1,
                            draw: teamb.draw,
                            defeat: teamb.defeat,
                            goalsPro: teamb.goalsPro + (resultb - resulta),
                            games: [...teamb.games, {
                                gameThree: {
                                    winner: true,
                                    adversary: team.Name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    }



                
            }        

        }
    }
    console.log('groups', groups)
    return groups;
}

// ordena o grupo com base nos pontos obtidos

export function sortGroupByPoints(groups) {

    for (let i = 0; i < groups.length; i++) {

        groups[i].sort((team, team2) => {

            if (team.points > team2.points) {
                return team
            } else if (team.points == team2.points) {
                return team.goalsPro > team2.goalsPro ? team : team2
            } else {
                return team2
            }
        })
    }

    return groups;

}
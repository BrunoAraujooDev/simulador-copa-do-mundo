export function createGroups(teams) {

    let auxArray = teams;
    
    const teamsArray = [[], [], [], [], [], [], [], []]
    
    
    for (let i = 0; i < teams.length; i++) {
        
        let position = Math.floor(Math.random() * (8 - 0) + 0);
        
        if (teamsArray[position].length < 4) {
            teamsArray[position].push(teams[i])
            
        } else {
            const index = teamsArray.findIndex(item => item.length != 4)
            
            teamsArray[index].push(teams[i])
            
        }
        
    }
    
    for (let i = 0; i < teams.length; i++) {
        
        teamsArray.forEach(group => {
            
            let hasInArray = group.findIndex(team => teams[i].name == team.name && true)
            
            if(hasInArray !=  -1){
                
                 auxArray.splice(i, 1)
                }  
                
            } )
            
        }
        
        console.log('auxArray', auxArray)
     

    const results = makeResultsForEachGroup(teamsArray)

    const sortedGroups = sortGroupByPoints(results)

    return sortedGroups



}

// cria o resultado de cada confronto

function makeResultsForEachGroup(groups) {
    //console.log('groups', groups)


    for (let i = 0; i < groups.length; i++) {

        let group = groups[i]

        for (let j = 0; j < group.length; j++) {

            let team = group[j]
            

            for (let k = 0; k < team.games.length; k++) {

                let resulta = Math.floor(Math.random() * (7 - 0) + 0);
                let resultb = Math.floor(Math.random() * (7 - 0) + 0);

                
                if(k==0){
                    if (resulta > resultb ) {

                        groups[i][j] =  {
                            token: team.Token,
                            name: team.Name,
                            points: team.points + 3,
                            matches: 3,
                            victory: team.victory + 1,
                            draw: team.draw,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + resulta,
                            games: [...team.games, {
                                gameOne: {
                                    winner: true,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                    } else if (resulta == resultb) {
                        groups[i][j] =  {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            victory: team.victory,
                            points: team.points + 1,
                            draw: team.draw + 1,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + resulta,
                            games: [...team.games, {
                                k: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                    } else {
                        groups[i][j] =  {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            points: team.points,
                            victory: team.victory,
                            draw: team.draw,
                            defeat: team.defeat + 1,
                            goalsPro: team.goalsPro + resulta,
                            games: [...team.games,{
                                k: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                    }
                } else if( k == 1){
                    if (resulta > resultb ) {

                        groups[i][j] =  {
                            token: team.Token,
                            name: team.Name,
                            points: team.points + 3,
                            matches: 3,
                            victory: team.victory + 1,
                            draw: team.draw,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + resulta,
                            games: [...team.games, {
                                gameTwo: {
                                    winner: true,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                    } else if (resulta == resultb) {
                        groups[i][j] =  {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            victory: team.victory,
                            points: team.points + 1,
                            draw: team.draw + 1,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + resulta,
                            games: [...team.games, {
                                gameTwo: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                    } else {
                        groups[i][j] =  {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            points: team.points,
                            victory: team.victory,
                            draw: team.draw,
                            defeat: team.defeat + 1,
                            goalsPro: team.goalsPro + resulta,
                            games: [...team.games,{
                                gameTwo: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                    }
                } else {
                    if (resulta > resultb ) {

                        groups[i][j] =  {
                            token: team.Token,
                            name: team.Name,
                            points: team.points + 3,
                            matches: 3,
                            victory: team.victory + 1,
                            draw: team.draw,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + resulta,
                            games: [...team.games, {
                                gameThree: {
                                    winner: true,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                    } else if (resulta == resultb) {
                        groups[i][j] =  {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            victory: team.victory,
                            points: team.points + 1,
                            draw: team.draw + 1,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + resulta,
                            games: [...team.games, {
                                gameThree: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                    } else {
                        groups[i][j] =  {
                            token: team.Token,
                            name: team.Name,
                            matches: 3,
                            points: team.points,
                            victory: team.victory,
                            draw: team.draw,
                            defeat: team.defeat + 1,
                            goalsPro: team.goalsPro + resulta,
                            games: [...team.games,{
                                gameThree: {
                                    winner: false,
                                    adversary: groups[i][j + 1].Name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                    }
                }

                


            }
        }
    }


    return groups;
}

// ordena o grupo com base nos pontos obtidos

function sortGroupByPoints(groups){

    for(let i = 0; i <  groups.length; i++){

        groups[i].sort((team, team2) => {

            if(team.points > team2.points){
                return team
            } else if(team.points == team2.points){
                return team.goalsPro > team2.goalsPro ? team : team2
            } else {
                return team2
            }
        })
    }

    return groups;

}
export function createResults(teams) {

    const teamsArray = [[], [], [], [], [], [], [], []]


    /*for(let i = 0; i < teamsArray.length; i++){
        
        teamsArray[i].push([])
    }*/

    /* teams.Result.map(team => {
         
         let position = Math.floor(Math.random() * (8 - 1) + 1);
         console.log('position', position)
         
         
         switch (position) {
             case 1:
                 
                 if(teamsArray[0].length > 4){
                     teamsArray[0].push(team)
                 } else if (teamsArray[7].length > 4){
                     teamsArray[7].push(team)
                 } else if (teamsArray[6].length > 4){
                     teamsArray[6].push(team)
                 } else if (teamsArray[5].length > 4){
                     teamsArray[5].push(team)
                 } else if (teamsArray[4].length > 4){
                     teamsArray[4].push(team)
                 } else if (teamsArray[3].length > 4){
                     teamsArray[3].push(team)
                 } else if (teamsArray[2].length > 4){
                     teamsArray[2].push(team)
                 }  else if (teamsArray[1].length > 4){
                     teamsArray[1].push(team)
                 }
                 
                 break;
                 case 2:
                     
                     if(teamsArray[1].length > 4){
                         teamsArray[1].push(team)
                     } else if (teamsArray[6].length > 4){
                         teamsArray[6].push(team)
                     } else if (teamsArray[5].length > 4){
                         teamsArray[5].push(team)
                     } else if (teamsArray[4].length > 4){
                     teamsArray[4].push(team)
                 } else if (teamsArray[3].length > 4){
                     teamsArray[3].push(team)
                 } else if (teamsArray[2].length > 4){
                     teamsArray[2].push(team)
                 } else if (teamsArray[7].length > 4){
                     teamsArray[7].push(team)
                 }  else if (teamsArray[0].length > 4){
                     teamsArray[0].push(team)
                 }
                 break;
                 case 3:
                     
                     if(teamsArray[2].length > 4){
                         teamsArray[2].push(team)
                     } else if (teamsArray[5].length > 4){
                         teamsArray[5].push(team)
                     } else if (teamsArray[4].length > 4){
                         teamsArray[4].push(team)
                     } else if (teamsArray[3].length > 4){
                     teamsArray[3].push(team)
                 } else if (teamsArray[1].length > 4){
                     teamsArray[1].push(team)
                 } else if (teamsArray[0].length > 4){
                     teamsArray[0].push(team)
                 } else if (teamsArray[6].length > 4){
                     teamsArray[6].push(team)
                 }  else if (teamsArray[7].length > 4){
                     teamsArray[7].push(team)
                 }
                 break;
                 case 4:
                     
                     if(teamsArray[3].length > 4){
                         teamsArray[3].push(team)
                     } else if (teamsArray[4].length > 4){
                         teamsArray[4].push(team)
                     } else if (teamsArray[5].length > 4){
                     teamsArray[5].push(team)
                 } else if (teamsArray[0].length > 4){
                     teamsArray[0].push(team)
                 } else if (teamsArray[2].length > 4){
                     teamsArray[2].push(team)
                 } else if (teamsArray[6].length > 4){
                     teamsArray[6].push(team)
                 } else if (teamsArray[1].length > 4){
                     teamsArray[1].push(team)
                 }  else if (teamsArray[7].length > 4){
                     teamsArray[7].push(team)
                 }
                 break;
                 case 5:
                     
                     if(teamsArray[4].length > 4){
                         teamsArray[4].push(team)
                     }  else if (teamsArray[0].length > 4){
                         teamsArray[0].push(team)
                     } else if (teamsArray[1].length > 4){
                         teamsArray[1].push(team)
                     } else if (teamsArray[2].length > 4){
                         teamsArray[2].push(team)
                     } else if (teamsArray[3].length > 4){
                         teamsArray[3].push(team)
                     } else if (teamsArray[6].length > 4){
                         teamsArray[6].push(team)
                     } else if (teamsArray[5].length > 4){
                         teamsArray[5].push(team)
                     }  else if (teamsArray[7].length > 4){
                         teamsArray[7].push(team)
                     }
                     break;
                     case 6:
                         
                         if(teamsArray[5].length > 4){
                             teamsArray[5].push(team)
                         } else if (teamsArray[7].length > 4){
                             teamsArray[7].push(team)
                         } else if (teamsArray[1].length > 4){
                             teamsArray[1].push(team)
                         } else if (teamsArray[4].length > 4){
                             teamsArray[4].push(team)
                         } else if (teamsArray[3].length > 4){
                             teamsArray[3].push(team)
                         } else if (teamsArray[5].length > 4){
                             teamsArray[5].push(team)
                         } else if (teamsArray[2].length > 4){
                             teamsArray[2].push(team)
                         }  else if (teamsArray[6].length > 4){
                             teamsArray[6].push(team)
                         }
                         break;
                         case 7:
                             
                 if(teamsArray[6].length > 4){
                     teamsArray[6].push(team)
                 } else if (teamsArray[5].length > 4){
                     teamsArray[5].push(team)
                 } else if (teamsArray[1].length > 4){
                     teamsArray[1].push(team)
                 } else if (teamsArray[2].length > 4){
                     teamsArray[2].push(team)
                 } else if (teamsArray[3].length > 4){
                     teamsArray[3].push(team)
                 } else if (teamsArray[4].length > 4){
                     teamsArray[4].push(team)
                 } else if (teamsArray[7].length > 4){
                     teamsArray[7].push(team)
                 }  else if (teamsArray[0].length > 4){
                     teamsArray[0].push(team)
                 }
                 break;
                 case 8:
                     
                     if(teamsArray[7].length > 4){
                         teamsArray[7].push(team)
                     } else if (teamsArray[6].length > 4){
                         teamsArray[6].push(team)
                     } else if (teamsArray[5].length > 4){
                         teamsArray[5].push(team)
                     } else if (teamsArray[4].length > 4){
                         teamsArray[4].push(team)
                     } else if (teamsArray[3].length > 4){
                         teamsArray[3].push(team)
                     } else if (teamsArray[2].length > 4){
                         teamsArray[2].push(team)
                     } else if (teamsArray[1].length > 4){
                         teamsArray[1].push(team)
                     }  else if (teamsArray[0].length > 4){
                         teamsArray[0].push(team)
                     }
                 break;
                 
                 default:
                     break;
                 }
                 
                 
             })
             
             console.log('teamsArray', teamsArray)*/



    for (let i = 0; i < teams.Result.length; i++) {

        let position = Math.floor(Math.random() * (8 - 0) + 0);

        if (teamsArray[position].length < 4) {
            teamsArray[position].push(teams.Result[i])
        } else {
            const index = teamsArray.findIndex(item => item.length != 4)

            teamsArray[index].push(teams.Result[i])
        }


    }


    const results = makeResultsForEachGroup(teamsArray)



}

// cria o resultado de cada confronto

function makeResultsForEachGroup(groups) {


    for (let i = 0; i < groups.length; i++) {

        let group = groups[i]

        for (let j = 0; j < group.length; j++) {

            let team = group[j]

            for (let k = 0; k < team.rodadas.length; k++) {

                let resulta = Math.floor(Math.random() * (7 - 0) + 0);
                let resultb = Math.floor(Math.random() * (7 - 0) + 0);
                if (resulta > resultb) {
                    groups[i][j] = [...groups[i][j], {
                        victory: victory++,
                        points: points + 3,
                        goalsPro: goalsPro + resulta,
                        rodadas: [...rodadas, {
                            k: {
                                winner: true,
                                adversary: groups[i][j + 1].Name,
                                goals: resulta,
                                goalsTaken: resultb
                            }
                        }]
                    }]
                } else if (resulta == resultb) {
                    groups[i][j] = [...groups[i][j], {
                        draw: draw++,
                        points: points + 1,
                        goalsPro: goalsPro + resulta,
                        rodadas: {
                            k: {
                                winner: false,
                                adversary: groups[i][j + 1].Name,
                                goals: resulta,
                                goalsTaken: resultb
                            }
                        }
                    }]
                } else {
                    groups[i][j] = [...groups[i][j], {
                        defeat: defeat++,
                        goalsPro: goalsPro + resulta,
                        rodadas: {
                            k: {
                                winner: false,
                                adversary: groups[i][j + 1].Name,
                                goals: resulta,
                                goalsTaken: resultb
                            }
                        }
                    }]
                }


            }
        }
    }


    return groups;
}

// ordena o grupo com base nos pontos obtidos

function sortGroupByPoints(groups){

    for(let i = 0; i <  groups.length; i++){

        let sortedGroup = groups[i].sort((team, index) => {

            if(team.points > team[index + 1].points){
                return team
            } else {
                return team[index + 1]
            }
        })
    }

}
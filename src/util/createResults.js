// export function createGroups(teams) {
//     const MAX_TEAMS = 4;
//     const groups = [];
//     while (teams.length > 0) {
//         const group = [];
//         for (let i = 0; i < MAX_TEAMS; i++) {
//             const index = Math.floor(Math.random() * teams.length);
//             group.push(teams[index]);
//             teams.splice(index, 1);
//         }
//         groups.push(group);
//     }
//     console.log('groups', groups)

//     return groups;
// }

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
    // console.log('groups', groups)
    return groups
}




// cria o resultado de cada confronto

export function makeResultsForEachGroup(groups) {


    console.log('group', groups)

    for (let i = 0; i < groups.length; i++) {
        

        let group = groups[i]
        let matches = 3

        for (let j = 0; j < matches; j++) {

            if (j == 0) {

                let round = [
                    'gameOne',
                    'gameTwo',
                    'gameThree'
                ]

                for (let k = 1; k <= 3; k++) {

                    let resulta = Math.floor(Math.random() * (7));
                    let resultb = Math.floor(Math.random() * (7));

                    
                    let teamb;
                    //let teamb = (k === 1) ? group[1] : (k == 2 ? group[3] : group[2])
                    
                    if(k === 1) teamb = 0 //group[1];
                    if(k === 2) teamb = 1 //group[3];
                    if(k === 3) teamb = -1 //group[2];
                    
                    
                    
                    
                    if (resulta > resultb) {
                        
                        
                        groups[i][0] = {
                            token: groups[i][0].token,
                            name: groups[i][0].name,
                            points: groups[i][0].points + 3,
                            matches: 3,
                            victory: groups[i][0].victory + 1,
                            draw: groups[i][0].draw,
                            defeat: groups[i][0].defeat,
                            goalsPro: groups[i][0].goalsPro + (resulta - resultb),
                            games: [...groups[i][0].games, {
                                [round[k - 1]]: {
                                    winner: true,
                                    adversary: groups[i][k + teamb].name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }
                        
                        
                        groups[i][k + teamb] = {
                            token: groups[i][k + teamb].token,
                            name: groups[i][k + teamb].name,
                            matches: 3,
                            points: groups[i][k + teamb].points,
                            victory: groups[i][k + teamb].victory,
                            draw: groups[i][k + teamb].draw,
                            defeat: groups[i][k + teamb].defeat + 1,
                            goalsPro: groups[i][k + teamb].goalsPro + (resultb - resulta),
                            games: [...groups[i][k + teamb].games, {
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: groups[i][0].name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                        // console.log('teamb', groups[teamb])
                    } else if (resulta == resultb) {
                        groups[i][0] = {
                            token: groups[i][0].token,
                            name: groups[i][0].name,
                            matches: 3,
                            points: groups[i][0].points + 1,
                            victory: groups[i][0].victory,
                            draw: groups[i][0].draw + 1,
                            defeat: groups[i][0].defeat,
                            goalsPro: groups[i][0].goalsPro + (resulta - resultb),
                            games: [...groups[i][0].games, {
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: groups[i][k + teamb].name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][k + teamb] = {
                            token: groups[i][k + teamb].token,
                            name: groups[i][k + teamb].name,
                            matches: 3,
                            points: groups[i][k + teamb].points + 1,
                            victory: groups[i][k + teamb].victory,
                            draw: groups[i][k + teamb].draw + 1,
                            defeat: groups[i][k + teamb].defeat,
                            goalsPro: groups[i][k + teamb].goalsPro + (resultb - resulta),
                            games: [...groups[i][k + teamb].games, {
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: groups[i][0].name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else {
                        groups[i][0] = {
                            token: groups[i][0].token,
                            name: groups[i][0].name,
                            matches: 3,
                            points: groups[i][0].points,
                            victory: groups[i][0].victory,
                            draw: groups[i][0].draw,
                            defeat: groups[i][0].defeat + 1,
                            goalsPro: groups[i][0].goalsPro + (resulta - resultb),
                            games: [...groups[i][0].games, {
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: groups[i][k + teamb].name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][k + teamb] = {
                            token: groups[i][k + teamb].token,
                            name: groups[i][k + teamb].name,
                            matches: 3,
                            points: groups[i][k + teamb].points + 3,
                            victory: groups[i][k + teamb].victory + 1,
                            draw: groups[i][k + teamb].draw,
                            defeat: groups[i][k + teamb].defeat,
                            goalsPro: groups[i][k + teamb].goalsPro + (resultb - resulta),
                            games: [...groups[i][k + teamb].games, {
                                [round[k - 1]]: {
                                    winner: true,
                                    adversary: groups[i][0].name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    }



                }


            } else if (j == 1) {

                let round = [
                    'gameTwo',
                    'gameThree'
                ]

                for (let k = 1; k <= 2; k++) {
                    

                    let resulta = Math.floor(Math.random() * (7));
                    let resultb = Math.floor(Math.random() * (7));                

                    if (resulta > resultb) {

                        groups[i][1] = {
                            token: groups[i][1].token,
                            name: groups[i][1].name,
                            points: groups[i][1].points + 3,
                            matches: 3,
                            victory: groups[i][1].victory + 1,
                            draw: groups[i][1].draw,
                            defeat: groups[i][1].defeat,
                            goalsPro: groups[i][1].goalsPro + (resulta - resultb),
                            games: [...groups[i][1].games, {
                                [round[k - 1]]: {
                                    winner: true,
                                    adversary: groups[i][k + 1].name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][k + 1] = {
                            token: groups[i][k + 1].token,
                            name: groups[i][k + 1].name,
                            matches: 3,
                            points: groups[i][k + 1].points,
                            victory: groups[i][k + 1].victory,
                            draw: groups[i][k + 1].draw,
                            defeat: groups[i][k + 1].defeat + 1,
                            goalsPro: groups[i][k + 1].goalsPro + (resultb - resulta),
                            games: [...groups[i][k + 1].games, {
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: groups[i][1].name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else if (resulta == resultb) {
                        groups[i][1] = {
                            token: groups[i][1].token,
                            name: groups[i][1].name,
                            matches: 3,
                            points: groups[i][1].points + 1,
                            victory: groups[i][1].victory,
                            draw: groups[i][1].draw + 1,
                            defeat: groups[i][1].defeat,
                            goalsPro: groups[i][1].goalsPro + (resulta - resultb),
                            games: [...groups[i][1].games, {
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: groups[i][k + 1].name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][k + 1] = {
                            token: groups[i][k + 1].token,
                            name: groups[i][k + 1].name,
                            matches: 3,
                            points: groups[i][k + 1].points + 1,
                            victory: groups[i][k + 1].victory,
                            draw: groups[i][k + 1].draw + 1,
                            defeat: groups[i][k + 1].defeat,
                            goalsPro: groups[i][k + 1].goalsPro + (resultb - resulta),
                            games: [...groups[i][k + 1].games, {
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: groups[i][1].name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else {
                        groups[i][1] = {
                            token: groups[i][1].token,
                            name: groups[i][1].name,
                            matches: 3,
                            points: groups[i][1].points,
                            victory: groups[i][1].victory,
                            draw: groups[i][1].draw,
                            defeat: groups[i][1].defeat + 1,
                            goalsPro: groups[i][1].goalsPro + (resulta - resultb),
                            games: [...groups[i][1].games, {
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: groups[i][k + 1].name,
                                    goals: resulta,
                                    goalsTaken: resultb
                                }
                            }]
                        }

                        groups[i][k + 1] = {
                            token: groups[i][k + 1].token,
                            name: groups[i][k + 1].name,
                            matches: 3,
                            points: groups[i][k + 1].points + 3,
                            victory: groups[i][k + 1].victory + 1,
                            draw: groups[i][k + 1].draw,
                            defeat: groups[i][k + 1].defeat,
                            goalsPro: groups[i][k + 1].goalsPro + (resultb - resulta),
                            games: [...groups[i][k + 1].games, {
                                [round[k - 1]]: {
                                    winner: true,
                                    adversary: groups[i][1].name,
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
                let teamb = group[j + k]

                if (resulta > resultb) {

                    groups[i][2] = {
                        token: groups[i][2].token,
                        name: groups[i][2].name,
                        points: groups[i][2].points + 3,
                        matches: 3,
                        victory: groups[i][2].victory + 1,
                        draw: groups[i][2].draw,
                        defeat: groups[i][2].defeat,
                        goalsPro: groups[i][2].goalsPro + (resulta - resultb),
                        games: [...groups[i][2].games, {
                            gameOne: {
                                winner: true,
                                adversary: groups[i][3].name,
                                goals: resulta,
                                goalsTaken: resultb
                            }
                        }]
                    }

                    groups[i][3] = {
                        token: groups[i][3].token,
                        name: groups[i][3].name,
                        matches: 3,
                        points: groups[i][3].points,
                        victory: groups[i][3].victory,
                        draw: groups[i][3].draw,
                        defeat: groups[i][3].defeat + 1,
                        goalsPro: groups[i][3].goalsPro + (resultb - resulta),
                        games: [...groups[i][3].games, {
                            gameOne: {
                                winner: false,
                                adversary: groups[i][2].name,
                                goals: resultb,
                                goalsTaken: resulta
                            }
                        }]
                    }
                } else if (resulta == resultb) {
                    groups[i][2] = {
                        token: groups[i][2].token,
                        name: groups[i][2].name,
                        matches: 3,
                        points: groups[i][2].points + 1,
                        victory: groups[i][2].victory,
                        draw: groups[i][2].draw + 1,
                        defeat: groups[i][2].defeat,
                        goalsPro: groups[i][2].goalsPro + (resulta - resultb),
                        games: [...groups[i][2].games, {
                            gameOne: {
                                winner: false,
                                adversary: groups[i][3].name,
                                goals: resulta,
                                goalsTaken: resultb
                            }
                        }]
                    }

                    groups[i][3] = {
                        token: groups[i][3].token,
                        name: groups[i][3].name,
                        matches: 3,
                        points: groups[i][3].points + 1,
                        victory: groups[i][3].victory,
                        draw: groups[i][3].draw + 1,
                        defeat: groups[i][3].defeat,
                        goalsPro: groups[i][3].goalsPro + (resultb - resulta),
                        games: [...groups[i][3].games, {
                            gameOne: {
                                winner: false,
                                adversary: groups[i][2].name,
                                goals: resultb,
                                goalsTaken: resulta
                            }
                        }]
                    }
                } else {
                    groups[i][2] = {
                        token: groups[i][2].token,
                        name: groups[i][2].name,
                        matches: 3,
                        points: groups[i][2].points,
                        victory: groups[i][2].victory,
                        draw: groups[i][2].draw,
                        defeat: groups[i][2].defeat + 1,
                        goalsPro: groups[i][2].goalsPro + (resulta - resultb),
                        games: [...groups[i][2].games, {
                            gameOne: {
                                winner: false,
                                adversary: groups[i][3].name,
                                goals: resulta,
                                goalsTaken: resultb
                            }
                        }]
                    }

                    groups[i][3] = {
                        token: groups[i][3].token,
                        name: groups[i][3].name,
                        matches: 3,
                        points: groups[i][3].points + 3,
                        victory: groups[i][3].victory + 1,
                        draw: groups[i][3].draw,
                        defeat: groups[i][3].defeat,
                        goalsPro: groups[i][3].goalsPro + (resultb - resulta),
                        games: [...groups[i][3].games, {
                            gameOne: {
                                winner: true,
                                adversary: groups[i][2].name,
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
                return -1
            } else if (team.points == team2.points) {
                return team.goalsPro > team2.goalsPro ? -1 : 1
            } else {
                return 1
            }
        })
    }

    return groups;

}

/* for(let k = 1; k < 4; k++){
 
                     let resulta = Math.floor(Math.random() * (7));
                     let resultb = Math.floor(Math.random() * (7));
 
                     let team = group[j]
                     
                     //let teamb =  k === 2 ? group[3] : (k === 1 ? group[1] : group[2])
                     let teamb;
 
                     switch (k) {
                         case 1:
                              teamb = group[1]
                             if (resulta > resultb) {
 
 
 
                                 groups[i][0] = {
                                     token: team.token,
                                     name: team.name,
                                     points: team.points + 3,
                                     matches: 3,
                                     victory: team.victory + 1,
                                     draw: team.draw,
                                     defeat: team.defeat,
                                     goalsPro: team.goalsPro + (resulta - resultb),
                                     games: [...team.games, {
                                         gameOne: {
                                             winner: true,
                                             adversary: groups[i][1].name,
                                             goals: resulta,
                                             goalsTaken: resultb
                                         }
                                     }]
                                 }
         
                                 groups[i][1] = {
                                     token: teamb.token,
                                     name: teamb.name,
                                     matches: 3,
                                     points: teamb.points,
                                     victory: teamb.victory,
                                     draw: teamb.draw,
                                     defeat: teamb.defeat + 1,
                                     goalsPro: teamb.goalsPro + (resultb - resulta),
                                     games: [...teamb.games, {
                                         gameOne: {
                                             winner: false,
                                             adversary: groups[i][0].name,
                                             goals: resultb,
                                             goalsTaken: resulta
                                         }
                                     }]
                                 }
                             } else if (resulta == resultb) {
                                 groups[i][0] = {
                                     token: team.token,
                                     name: team.name,
                                     matches: 3,
                                     points: team.points + 1,
                                     victory: team.victory,
                                     draw: team.draw + 1,
                                     defeat: team.defeat,
                                     goalsPro: team.goalsPro + (resulta - resultb),
                                     games: [...team.games, {
                                         gameOne: {
                                             winner: false,
                                             adversary: groups[i][1].name,
                                             goals: resulta,
                                             goalsTaken: resultb
                                         }
                                     }]
                                 }
         
                                 groups[i][1] = {
                                     token: teamb.token,
                                     name: teamb.name,
                                     matches: 3,
                                     points: teamb.points + 1,
                                     victory: teamb.victory,
                                     draw: teamb.draw + 1,
                                     defeat: teamb.defeat,
                                     goalsPro: teamb.goalsPro + (resultb - resulta),
                                     games: [...teamb.games, {
                                         gameOne: {
                                             winner: false,
                                             adversary: groups[i][0].name,
                                             goals: resultb,
                                             goalsTaken: resulta
                                         }
                                     }]
                                 }
                             } else {
                                 groups[i][0] = {
                                     token: team.token,
                                     name: team.name,
                                     matches: 3,
                                     points: team.points,
                                     victory: team.victory,
                                     draw: team.draw,
                                     defeat: team.defeat + 1,
                                     goalsPro: team.goalsPro + (resulta - resultb),
                                     games: [...team.games, {
                                         gameOne: {
                                             winner: false,
                                             adversary: groups[i][1].name,
                                             goals: resulta,
                                             goalsTaken: resultb
                                         }
                                     }]
                                 }
         
                                 groups[i][1] = {
                                     token: teamb.token,
                                     name: teamb.name,
                                     matches: 3,
                                     points: teamb.points + 3,
                                     victory: teamb.victory + 1,
                                     draw: teamb.draw,
                                     defeat: teamb.defeat,
                                     goalsPro: teamb.goalsPro + (resultb - resulta),
                                     games: [...teamb.games, {
                                         gameOne: {
                                             winner: true,
                                             adversary: groups[i][0].name,
                                             goals: resultb,
                                             goalsTaken: resulta
                                         }
                                     }]
                                 }
                             }
         
         
         
                             
                             break;
                             case 2:
                                 teamb = group[3]
                                 if (resulta > resultb) {
 
 
                                     groups[i][j] = {
                                         token: team.token,
                                         name: team.name,
                                         points: team.points + 3,
                                         matches: 3,
                                         victory: team.victory + 1,
                                         draw: team.draw,
                                         defeat: team.defeat,
                                         goalsPro: team.goalsPro + (resulta - resultb),
                                         games: [...team.games, {
                                             [round[k-1]]: {
                                                 winner: true,
                                                 adversary: teamb.name,
                                                 goals: resulta,
                                                 goalsTaken: resultb
                                             }
                                         }]
                                     }
             
                                     groups[teamb] = {
                                         token: teamb.token,
                                         name: teamb.name,
                                         matches: 3,
                                         points: teamb.points,
                                         victory: teamb.victory,
                                         draw: teamb.draw,
                                         defeat: teamb.defeat + 1,
                                         goalsPro: teamb.goalsPro + (resultb - resulta),
                                         games: [...teamb.games, {
                                             [round[k-1]]: {
                                                 winner: false,
                                                 adversary: team.name,
                                                 goals: resultb,
                                                 goalsTaken: resulta
                                             }
                                         }]
                                     }
                                 } else if (resulta == resultb) {
                                     groups[i][j] = {
                                         token: team.token,
                                         name: team.name,
                                         matches: 3,
                                         points: team.points + 1,
                                         victory: team.victory,
                                         draw: team.draw + 1,
                                         defeat: team.defeat,
                                         goalsPro: team.goalsPro + (resulta - resultb),
                                         games: [...team.games, {
                                             [round[k-1]]: {
                                                 winner: false,
                                                 adversary: groups[i][j + 1].name,
                                                 goals: resulta,
                                                 goalsTaken: resultb
                                             }
                                         }]
                                     }
             
                                     groups[teamb] = {
                                         token: teamb.token,
                                         name: teamb.name,
                                         matches: 3,
                                         points: teamb.points + 1,
                                         victory: teamb.victory,
                                         draw: teamb.draw + 1,
                                         defeat: teamb.defeat,
                                         goalsPro: teamb.goalsPro + (resultb - resulta),
                                         games: [...teamb.games, {
                                             [round[k-1]]: {
                                                 winner: false,
                                                 adversary: team.name,
                                                 goals: resultb,
                                                 goalsTaken: resulta
                                             }
                                         }]
                                     }
                                 } else {
                                     groups[i][j] = {
                                         token: team.token,
                                         name: team.name,
                                         matches: 3,
                                         points: team.points,
                                         victory: team.victory,
                                         draw: team.draw,
                                         defeat: team.defeat + 1,
                                         goalsPro: team.goalsPro + (resulta - resultb),
                                         games: [...team.games, {
                                             [round[k-1]]: {
                                                 winner: false,
                                                 adversary: groups[i][j + 1].name,
                                                 goals: resulta,
                                                 goalsTaken: resultb
                                             }
                                         }]
                                     }
             
                                     groups[teamb] = {
                                         token: teamb.token,
                                         name: teamb.name,
                                         matches: 3,
                                         points: teamb.points + 3,
                                         victory: teamb.victory + 1,
                                         draw: teamb.draw,
                                         defeat: teamb.defeat,
                                         goalsPro: teamb.goalsPro + (resultb - resulta),
                                         games: [...teamb.games, {
                                             [round[k-1]]: {
                                                 winner: true,
                                                 adversary: team.name,
                                                 goals: resultb,
                                                 goalsTaken: resulta
                                             }
                                         }]
                                     }
                                 }
             
             
             
                             
                                 break;
                     
                         default:
                              teamb = group[2]
                             if (resulta > resultb) {
 
 
                                 groups[i][j] = {
                                     token: team.token,
                                     name: team.name,
                                     points: team.points + 3,
                                     matches: 3,
                                     victory: team.victory + 1,
                                     draw: team.draw,
                                     defeat: team.defeat,
                                     goalsPro: team.goalsPro + (resulta - resultb),
                                     games: [...team.games, {
                                         [round[k-1]]: {
                                             winner: true,
                                             adversary: teamb.name,
                                             goals: resulta,
                                             goalsTaken: resultb
                                         }
                                     }]
                                 }
         
                                 groups[teamb] = {
                                     token: teamb.token,
                                     name: teamb.name,
                                     matches: 3,
                                     points: teamb.points,
                                     victory: teamb.victory,
                                     draw: teamb.draw,
                                     defeat: teamb.defeat + 1,
                                     goalsPro: teamb.goalsPro + (resultb - resulta),
                                     games: [...teamb.games, {
                                         [round[k-1]]: {
                                             winner: false,
                                             adversary: team.name,
                                             goals: resultb,
                                             goalsTaken: resulta
                                         }
                                     }]
                                 }
                             } else if (resulta == resultb) {
                                 groups[i][j] = {
                                     token: team.token,
                                     name: team.name,
                                     matches: 3,
                                     points: team.points + 1,
                                     victory: team.victory,
                                     draw: team.draw + 1,
                                     defeat: team.defeat,
                                     goalsPro: team.goalsPro + (resulta - resultb),
                                     games: [...team.games, {
                                         [round[k-1]]: {
                                             winner: false,
                                             adversary: groups[i][j + 1].name,
                                             goals: resulta,
                                             goalsTaken: resultb
                                         }
                                     }]
                                 }
         
                                 groups[teamb] = {
                                     token: teamb.token,
                                     name: teamb.name,
                                     matches: 3,
                                     points: teamb.points + 1,
                                     victory: teamb.victory,
                                     draw: teamb.draw + 1,
                                     defeat: teamb.defeat,
                                     goalsPro: teamb.goalsPro + (resultb - resulta),
                                     games: [...teamb.games, {
                                         [round[k-1]]: {
                                             winner: false,
                                             adversary: team.name,
                                             goals: resultb,
                                             goalsTaken: resulta
                                         }
                                     }]
                                 }
                             } else {
                                 groups[i][j] = {
                                     token: team.token,
                                     name: team.name,
                                     matches: 3,
                                     points: team.points,
                                     victory: team.victory,
                                     draw: team.draw,
                                     defeat: team.defeat + 1,
                                     goalsPro: team.goalsPro + (resulta - resultb),
                                     games: [...team.games, {
                                         [round[k-1]]: {
                                             winner: false,
                                             adversary: groups[i][j + 1].name,
                                             goals: resulta,
                                             goalsTaken: resultb
                                         }
                                     }]
                                 }
         
                                 groups[teamb] = {
                                     token: teamb.token,
                                     name: teamb.name,
                                     matches: 3,
                                     points: teamb.points + 3,
                                     victory: teamb.victory + 1,
                                     draw: teamb.draw,
                                     defeat: teamb.defeat,
                                     goalsPro: teamb.goalsPro + (resultb - resulta),
                                     games: [...teamb.games, {
                                         [round[k-1]]: {
                                             winner: true,
                                             adversary: team.name,
                                             goals: resultb,
                                             goalsTaken: resulta
                                         }
                                     }]
                                 }
                             }
         
         
         
 
                             break;
                     }
                     console.log('teamb', teamb)
                     
                     // console.log('teamb', groups[teamb])
 
                     /*if (resulta > resultb) {
 
 
                         groups[i][j] = {
                             token: team.token,
                             name: team.name,
                             points: team.points + 3,
                             matches: 3,
                             victory: team.victory + 1,
                             draw: team.draw,
                             defeat: team.defeat,
                             goalsPro: team.goalsPro + (resulta - resultb),
                             games: [...team.games, {
                                 [round[k-1]]: {
                                     winner: true,
                                     adversary: teamb.name,
                                     goals: resulta,
                                     goalsTaken: resultb
                                 }
                             }]
                         }
 
                         groups[teamb] = {
                             token: teamb.token,
                             name: teamb.name,
                             matches: 3,
                             points: teamb.points,
                             victory: teamb.victory,
                             draw: teamb.draw,
                             defeat: teamb.defeat + 1,
                             goalsPro: teamb.goalsPro + (resultb - resulta),
                             games: [...teamb.games, {
                                 [round[k-1]]: {
                                     winner: false,
                                     adversary: team.name,
                                     goals: resultb,
                                     goalsTaken: resulta
                                 }
                             }]
                         }
                     } else if (resulta == resultb) {
                         groups[i][j] = {
                             token: team.token,
                             name: team.name,
                             matches: 3,
                             points: team.points + 1,
                             victory: team.victory,
                             draw: team.draw + 1,
                             defeat: team.defeat,
                             goalsPro: team.goalsPro + (resulta - resultb),
                             games: [...team.games, {
                                 [round[k-1]]: {
                                     winner: false,
                                     adversary: groups[i][j + 1].name,
                                     goals: resulta,
                                     goalsTaken: resultb
                                 }
                             }]
                         }
 
                         groups[teamb] = {
                             token: teamb.token,
                             name: teamb.name,
                             matches: 3,
                             points: teamb.points + 1,
                             victory: teamb.victory,
                             draw: teamb.draw + 1,
                             defeat: teamb.defeat,
                             goalsPro: teamb.goalsPro + (resultb - resulta),
                             games: [...teamb.games, {
                                 [round[k-1]]: {
                                     winner: false,
                                     adversary: team.name,
                                     goals: resultb,
                                     goalsTaken: resulta
                                 }
                             }]
                         }
                     } else {
                         groups[i][j] = {
                             token: team.token,
                             name: team.name,
                             matches: 3,
                             points: team.points,
                             victory: team.victory,
                             draw: team.draw,
                             defeat: team.defeat + 1,
                             goalsPro: team.goalsPro + (resulta - resultb),
                             games: [...team.games, {
                                 [round[k-1]]: {
                                     winner: false,
                                     adversary: groups[i][j + 1].name,
                                     goals: resulta,
                                     goalsTaken: resultb
                                 }
                             }]
                         }
 
                         groups[teamb] = {
                             token: teamb.token,
                             name: teamb.name,
                             matches: 3,
                             points: teamb.points + 3,
                             victory: teamb.victory + 1,
                             draw: teamb.draw,
                             defeat: teamb.defeat,
                             goalsPro: teamb.goalsPro + (resultb - resulta),
                             games: [...teamb.games, {
                                 [round[k-1]]: {
                                     winner: true,
                                     adversary: team.name,
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
                     'gameThree'
                 ]
 
                 for(let k = 1; k <= 2; k++){
 
                     let resulta = Math.floor(Math.random() * (7));
                     let resultb = Math.floor(Math.random() * (7));
 
                     let team = group[j]
                     let teamb = group[j+k]
 
                     if (resulta > resultb) {
 
                         groups[team] = {
                             token: team.token,
                             name: team.name,
                             points: team.points + 3,
                             matches: 3,
                             victory: team.victory + 1,
                             draw: team.draw,
                             defeat: team.defeat,
                             goalsPro: team.goalsPro + (resulta - resultb),
                             games: [...team.games, {
                                 [round[k-1]]: {
                                     winner: true,
                                     adversary: teamb.name,
                                     goals: resulta,
                                     goalsTaken: resultb
                                 }
                             }]
                         }
 
                         groups[teamb] = {
                             token: teamb.token,
                             name: teamb.name,
                             matches: 3,
                             points: teamb.points,
                             victory: teamb.victory,
                             draw: teamb.draw,
                             defeat: teamb.defeat + 1,
                             goalsPro: teamb.goalsPro + (resultb - resulta),
                             games: [...teamb.games, {
                                 [round[k-1]]: {
                                     winner: false,
                                     adversary: team.name,
                                     goals: resultb,
                                     goalsTaken: resulta
                                 }
                             }]
                         }
                     } else if (resulta == resultb) {
                         groups[i][j] = {
                             token: team.token,
                             name: team.name,
                             matches: 3,
                             points: team.points + 1,
                             victory: team.victory,
                             draw: team.draw + 1,
                             defeat: team.defeat,
                             goalsPro: team.goalsPro + (resulta - resultb),
                             games: [...team.games, {
                                 [round[k-1]]: {
                                     winner: false,
                                     adversary: teamb.name,
                                     goals: resulta,
                                     goalsTaken: resultb
                                 }
                             }]
                         }
 
                         groups[teamb] = {
                             token: teamb.token,
                             name: teamb.name,
                             matches: 3,
                             points: teamb.points + 1,
                             victory: teamb.victory,
                             draw: teamb.draw + 1,
                             defeat: teamb.defeat,
                             goalsPro: teamb.goalsPro + (resultb - resulta),
                             games: [...teamb.games, {
                                 [round[k-1]]: {
                                     winner: false,
                                     adversary: team.name,
                                     goals: resultb,
                                     goalsTaken: resulta
                                 }
                             }]
                         }
                     } else {
                         groups[i][j] = {
                             token: team.token,
                             name: team.name,
                             matches: 3,
                             points: team.points,
                             victory: team.victory,
                             draw: team.draw,
                             defeat: team.defeat + 1,
                             goalsPro: team.goalsPro + (resulta - resultb),
                             games: [...team.games, {
                                 [round[k-1]]: {
                                     winner: false,
                                     adversary: teamb.name,
                                     goals: resulta,
                                     goalsTaken: resultb
                                 }
                             }]
                         }
 
                         groups[teamb] = {
                             token: teamb.token,
                             name: teamb.name,
                             matches: 3,
                             points: teamb.points + 3,
                             victory: teamb.victory + 1,
                             draw: teamb.draw,
                             defeat: teamb.defeat,
                             goalsPro: teamb.goalsPro + (resultb - resulta),
                             games: [...teamb.games, {
                                 [round[k-1]]: {
                                     winner: true,
                                     adversary: team.name,
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
 
                         groups[team] = {
                             token: team.token,
                             name: team.name,
                             points: team.points + 3,
                             matches: 3,
                             victory: team.victory + 1,
                             draw: team.draw,
                             defeat: team.defeat,
                             goalsPro: team.goalsPro + (resulta - resultb),
                             games: [...team.games, {
                                 gameOne: {
                                     winner: true,
                                     adversary: teamb.name,
                                     goals: resulta,
                                     goalsTaken: resultb
                                 }
                             }]
                         }
 
                         groups[teamb] = {
                             token: teamb.token,
                             name: teamb.name,
                             matches: 3,
                             points: teamb.points,
                             victory: teamb.victory,
                             draw: teamb.draw,
                             defeat: teamb.defeat + 1,
                             goalsPro: teamb.goalsPro + (resultb - resulta),
                             games: [...teamb.games, {
                                 gameOne: {
                                     winner: false,
                                     adversary: team.name,
                                     goals: resultb,
                                     goalsTaken: resulta
                                 }
                             }]
                         }
                     } else if (resulta == resultb) {
                         groups[team] = {
                             token: team.token,
                             name: team.name,
                             matches: 3,
                             points: team.points + 1,
                             victory: team.victory,
                             draw: team.draw + 1,
                             defeat: team.defeat,
                             goalsPro: team.goalsPro + (resulta - resultb),
                             games: [...team.games, {
                                 gameOne: {
                                     winner: false,
                                     adversary: teamb.name,
                                     goals: resulta,
                                     goalsTaken: resultb
                                 }
                             }]
                         }
 
                         groups[teamb] = {
                             token: teamb.token,
                             name: teamb.name,
                             matches: 3,
                             points: teamb.points + 1,
                             victory: teamb.victory,
                             draw: teamb.draw + 1,
                             defeat: teamb.defeat,
                             goalsPro: teamb.goalsPro + (resultb - resulta),
                             games: [...teamb.games, {
                                 gameOne: {
                                     winner: false,
                                     adversary: team.name,
                                     goals: resultb,
                                     goalsTaken: resulta
                                 }
                             }]
                         }
                     } else {
                         groups[team] = {
                             token: team.token,
                             name: team.name,
                             matches: 3,
                             points: team.points,
                             victory: team.victory,
                             draw: team.draw,
                             defeat: team.defeat + 1,
                             goalsPro: team.goalsPro + (resulta - resultb),
                             games: [...team.games, {
                                 gameOne: {
                                     winner: false,
                                     adversary: teamb.name,
                                     goals: resulta,
                                     goalsTaken: resultb
                                 }
                             }]
                         }
 
                         groups[teamb] = {
                             token: teamb.token,
                             name: teamb.name,
                             matches: 3,
                             points: teamb.points + 3,
                             victory: teamb.victory + 1,
                             draw: teamb.draw,
                             defeat: teamb.defeat,
                             goalsPro: teamb.goalsPro + (resultb - resulta),
                             games: [...teamb.games, {
                                 gameOne: {
                                     winner: true,
                                     adversary: team.name,
                                     goals: resultb,
                                     goalsTaken: resulta
                                 }
                             }]
                         }
                     }*/
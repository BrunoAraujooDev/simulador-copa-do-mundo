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



    for (let i = 0; i < groups.length; i++) {
        console.log('i', i)

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

                    let team = group[0];
                    console.log('group', group)
                    let teamb;
                    //let teamb = (k === 1) ? group[1] : (k == 2 ? group[3] : group[2])

                    if(k === 1) teamb = group[1];
                    if(k === 2) teamb = group[3];
                    if(k === 3) teamb = group[2];
                    

                    console.log('teamb', teamb)

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
                                [round[k - 1]]: {
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
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: team.name,
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
                                [round[k - 1]]: {
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
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: team.name,
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
                                [round[k - 1]]: {
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
                                [round[k - 1]]: {
                                    winner: true,
                                    adversary: team.name,
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

                    let team = group[1]
                    let teamb = group[1 + k]

                    if (resulta > resultb) {

                        groups[i][1] = {
                            token: team.token,
                            name: team.name,
                            points: team.points + 3,
                            matches: 3,
                            victory: team.victory + 1,
                            draw: team.draw,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                [round[k - 1]]: {
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
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: team.name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else if (resulta == resultb) {
                        groups[i][1] = {
                            token: team.token,
                            name: team.name,
                            matches: 3,
                            points: team.points + 1,
                            victory: team.victory,
                            draw: team.draw + 1,
                            defeat: team.defeat,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                [round[k - 1]]: {
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
                                [round[k - 1]]: {
                                    winner: false,
                                    adversary: team.name,
                                    goals: resultb,
                                    goalsTaken: resulta
                                }
                            }]
                        }
                    } else {
                        groups[i][1] = {
                            token: team.token,
                            name: team.name,
                            matches: 3,
                            points: team.points,
                            victory: team.victory,
                            draw: team.draw,
                            defeat: team.defeat + 1,
                            goalsPro: team.goalsPro + (resulta - resultb),
                            games: [...team.games, {
                                [round[k - 1]]: {
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
                                [round[k - 1]]: {
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
                let teamb = group[j + k]

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
                }

            }

        }
    }

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


export function makePlayoffResults(teams) {

    let winnerTeams = []

    for (let i = 0; i < teams.length; i++) {

        let resulta = Math.floor(Math.random() * (7));
        let resultb = Math.floor(Math.random() * (7));

        if (resulta > resultb) {

            teams[i] = [...teams[i],
            {
                round8: {
                    goals: resulta,
                    goalsTaken: resultb,
                    penalty: false,
                    winner: true
                }

            }
            ]

            teams[i + 1] = [...teams[i + 1],
            {
                round8: {
                    goals: resultb,
                    goalsTaken: resulta,
                    penalty: false,
                    winner: false
                }

            }
            ]
        }

        if(resultb > resulta){
            
            teams[i] = [...teams[i],
            {
                round8: {
                    goals: resulta,
                    goalsTaken: resultb,
                    penalty: false,
                    winner: false
                }

            }
            ]

            teams[i + 1] = [...teams[i + 1],
            {
                round8: {
                    goals: resultb,
                    goalsTaken: resulta,
                    penalty: false,
                    winner: true
                }

            }
            ]

        }

        if(resulta == resultb){

            let penaltya = Math.floor(Math.random() * (7));
            let penaltyb = Math.floor(Math.random() * (7));
        }
    }
}
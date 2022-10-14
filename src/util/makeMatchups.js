

export function makeMatchups(groups){
    console.log('groups', groups)

    let playoffsMatchUps = [];


    // groups.forEach( group => {
    //      group.filter((item, idx) =>  {
    //         if(idx == 0 || idx == 1){
    //             playoffsArray.push(item)
    //         }
    //     })
    // })
    let playoffsArray = groups.map( group => {
         return group.filter((item, idx) =>  {
            if(idx == 0 || idx == 1){
                return item
            }
        })
    })

    playoffsMatchUps[0] = playoffsArray[0][0]
    playoffsMatchUps[1] = playoffsArray[1][1]
    playoffsMatchUps[2] = playoffsArray[2][0]
    playoffsMatchUps[3] = playoffsArray[3][1]
    playoffsMatchUps[4] = playoffsArray[4][0]
    playoffsMatchUps[5] = playoffsArray[5][1]
    playoffsMatchUps[6] = playoffsArray[6][0]
    playoffsMatchUps[7] = playoffsArray[7][1]
    playoffsMatchUps[8] = playoffsArray[1][0]
    playoffsMatchUps[9] = playoffsArray[0][1]
    playoffsMatchUps[10] = playoffsArray[3][0]
    playoffsMatchUps[11] = playoffsArray[2][1]
    playoffsMatchUps[12] = playoffsArray[5][0]
    playoffsMatchUps[13] = playoffsArray[4][1]
    playoffsMatchUps[14] = playoffsArray[7][0]
    playoffsMatchUps[15] = playoffsArray[6][1]


    
    //group.filter(item=>  group.indexOf(item) == 0 || 1)

    console.log('playoffArray', playoffsMatchUps)
    return playoffsMatchUps;
}
import { getAllTeamsService, postResultService } from "../services/services"

export const getAllTeams = async () => {
   try {
    const result = await getAllTeamsService();

    return result.data
   } catch (error) {
        console.log(console.error(error))
   }
}

export const insertWinner = async (data) => {
   
   try {

    const result = await postResultService(data);

    return result

   } catch (error) {
        console.log(console.error(error))
   }
}
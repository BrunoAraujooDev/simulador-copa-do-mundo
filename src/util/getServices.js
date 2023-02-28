import { getAllTeamsService } from "../services/services"

export const getAllTeams = async () => {
   try {
    const result = await getAllTeamsService();

    return result.data
   } catch (error) {
        console.log(console.error(error))
   }
}

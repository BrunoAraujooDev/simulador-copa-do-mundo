import http from "../config/http";


export const getAllTeamsService = () => http.get("/GetAllTeams");


export const postResultService = (data) => http.post("/InsertFinalResult", data);
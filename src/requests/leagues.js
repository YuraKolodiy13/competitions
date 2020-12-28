import service from './service';
import {API_URL} from "../helpers/constants";


export const getCompetitionsApi = () => {
  return service.get(
    `/api/competitions`,
  )
};



export const getTeamsApi = () => {
  return service.get(
    `${API_URL}fd/competitions/2021/teams`,
  )
};

export const getTeamApi = (team_id) => {
  return service.get(
    `${API_URL}/teams/${team_id}`,
  )
};

export const getTeamInfoApi = (team) => {
  return service.get(
    `${API_URL}searchteams.php?t=${team}`,
  )
};

export const getPlayerApi = (player_id) => {
  return service.getWithToken(
    `${API_URL}players/${player_id}`,
  )
};

export const getPlayerMatchesApi = (player_id) => {
  return service.getWithToken(
    `${API_URL}players/${player_id}/matches`,
  )
};

export const getPlayerInfoApi = (player) => {
  return service.get(
    `${API_URL}searchplayers.php?p=${player}`,
  )
};

export const getTableApi = (id) => {
  return service.get(
    `${API_URL}/competitions/${id}/table`,
  )
};

export const getScheduleApi = ({matchday, id}) => {
  return service.get(
    `${API_URL}fd/competitions/${id}/matches?stage=REGULAR_SEASON&matchday=${matchday}`,
  )
};

export const getTeamNextScheduleApi = (team_id) => {
  return service.getWithToken(
    `${API_URL}teams/${team_id}/matches?status=SCHEDULED`,
  )
};

export const getTeamPrevScheduleApi = (team_id) => {
  return service.getWithToken(
    `${API_URL}teams/${team_id}/matches?status=FINISHED`,
  )
};


export const getTodaysMatchesApi = ({date, status}) => {
  return service.get(
    `${API_URL}fd/matches?dateFrom=${date}&dateTo=${date}&status=${status}`,
  )
};

export const getScorersApi = (league_id) => {
  return service.getWithToken(
    `${API_URL}competitions/${league_id}/scorers`,
  )
};

export const getHead2HeadApi = (match_id) => {
  return service.getWithToken(
    `${API_URL}matches/${match_id}`,
  )
};
import service from './service';
import {API_URL} from "../helpers/constants";

const api = API_URL;

export const getCompetitionsApi = () => {
  return service.get(
    `${api}/competitions`,
  )
};

export const getTeamsApi = () => {
  return service.get(
    `${api}/teams`,
  )
};

export const addTeamApi = (data) => {
  return service.post(
    `${api}/teams`, data
  )
};

export const addCompetitionApi = (data) => {
  return service.post(
    `${api}/competitions`, data
  )
};
export const getCompetitionApi = (id) => {
  return service.get(
    `${api}/competitions/${id}`,
  )
};
export const removeCompetitionApi = (id) => {
  return service.delete(
    `${api}/competitions/${id}`,
  )
};

export const getGroupApi = ({leagueId, groupId}) => {
  return service.get(
    `${api}/competitions/${leagueId}/groups/${groupId}`,
  )
};

export const addGroupApi = (data) => {
  return service.post(
    `${api}/competitions/${data.leagueId}/groups`, data.body
  )
};

export const getGroupTableApi = ({leagueId, groupId}) => {
  return service.get(
    `${api}/competitions/${leagueId}/groups/${groupId}/tables`,
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
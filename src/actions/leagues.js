import {defaultActionCreator} from "./actionCreator";

export const GET_COMPETITIONS_REQUEST = 'GET_COMPETITIONS_REQUEST';
export const GET_COMPETITIONS_REQUEST_SUCCESS = 'GET_COMPETITIONS_REQUEST_SUCCESS';
export const GET_COMPETITIONS_REQUEST_FAILED = 'GET_COMPETITIONS_REQUEST_FAILED';
export const getCompetitionsRequest = defaultActionCreator(GET_COMPETITIONS_REQUEST, 'data');

export const GET_TEAMS_REQUEST = 'GET_TEAMS_REQUEST';
export const GET_TEAMS_REQUEST_SUCCESS = 'GET_TEAMS_REQUEST_SUCCESS';
export const GET_TEAMS_REQUEST_FAILED = 'GET_TEAMS_REQUEST_FAILED';
export const getTeamsRequest = defaultActionCreator(GET_TEAMS_REQUEST, 'data');

export const ADD_TEAM_REQUEST = 'ADD_TEAM_REQUEST';
export const ADD_TEAM_REQUEST_SUCCESS = 'ADD_TEAM_REQUEST_SUCCESS';
export const ADD_TEAM_REQUEST_FAILED = 'ADD_TEAM_REQUEST_FAILED';
export const addTeamRequest = defaultActionCreator(ADD_TEAM_REQUEST, 'data', 'callback');

export const GET_COMPETITION_REQUEST = 'GET_COMPETITION_REQUEST';
export const GET_COMPETITION_REQUEST_SUCCESS = 'GET_COMPETITION_REQUEST_SUCCESS';
export const GET_COMPETITION_REQUEST_FAILED = 'GET_COMPETITION_REQUEST_FAILED';
export const getCompetitionRequest = defaultActionCreator(GET_COMPETITION_REQUEST, 'data');

export const ADD_COMPETITION_REQUEST = 'ADD_COMPETITION_REQUEST';
export const ADD_COMPETITION_REQUEST_SUCCESS = 'ADD_COMPETITION_REQUEST_SUCCESS';
export const ADD_COMPETITION_REQUEST_FAILED = 'ADD_COMPETITION_REQUEST_FAILED';
export const addCompetitionRequest = defaultActionCreator(ADD_COMPETITION_REQUEST, 'data', 'callback');

export const GET_GROUP_REQUEST = 'GET_GROUP_REQUEST';
export const GET_GROUP_REQUEST_SUCCESS = 'GET_GROUP_REQUEST_SUCCESS';
export const GET_GROUP_REQUEST_FAILED = 'GET_GROUP_REQUEST_FAILED';
export const getGroupRequest = defaultActionCreator(GET_GROUP_REQUEST, 'data');

export const ADD_GROUP_REQUEST = 'ADD_GROUP_REQUEST';
export const ADD_GROUP_REQUEST_SUCCESS = 'ADD_GROUP_REQUEST_SUCCESS';
export const ADD_GROUP_REQUEST_FAILED = 'ADD_GROUP_REQUEST_FAILED';
export const addGroupRequest = defaultActionCreator(ADD_GROUP_REQUEST, 'data', 'callback');

export const GET_GROUP_TABLE_REQUEST = 'GET_GROUP_TABLE_REQUEST';
export const GET_GROUP_TABLE_REQUEST_SUCCESS = 'GET_GROUP_TABLE_REQUEST_SUCCESS';
export const GET_GROUP_TABLE_REQUEST_FAILED = 'GET_GROUP_TABLE_REQUEST_FAILED';
export const getGroupTableRequest = defaultActionCreator(GET_GROUP_TABLE_REQUEST, 'data');

export const REMOVE_COMPETITION_REQUEST = 'REMOVE_COMPETITION_REQUEST';
export const REMOVE_COMPETITION_REQUEST_SUCCESS = 'REMOVE_COMPETITION_REQUEST_SUCCESS';
export const REMOVE_COMPETITION_REQUEST_FAILED = 'REMOVE_COMPETITION_REQUEST_FAILED';
export const removeCompetitionRequest = defaultActionCreator(REMOVE_COMPETITION_REQUEST, 'data');




export const GET_TEAM_REQUEST = 'GET_TEAM_REQUEST';
export const GET_TEAM_REQUEST_SUCCESS = 'GET_TEAM_REQUEST_SUCCESS';
export const GET_TEAM_REQUEST_FAILED = 'GET_TEAM_REQUEST_FAILED';

export const getTeamRequest = defaultActionCreator(GET_TEAM_REQUEST, 'data');
export const getTeamRequestSuccess = defaultActionCreator(GET_TEAM_REQUEST_SUCCESS, 'data');
export const getTeamRequestFailed = defaultActionCreator(GET_TEAM_REQUEST_FAILED, 'error');

export const GET_TEAM_INFO_REQUEST = 'GET_TEAM_INFO_REQUEST';
export const GET_TEAM_INFO_REQUEST_SUCCESS = 'GET_TEAM_INFO_REQUEST_SUCCESS';
export const GET_TEAM_INFO_REQUEST_FAILED = 'GET_TEAM_INFO_REQUEST_FAILED';

export const getTeamInfoRequest = defaultActionCreator(GET_TEAM_INFO_REQUEST, 'data');
export const getTeamInfoRequestSuccess = defaultActionCreator(GET_TEAM_INFO_REQUEST_SUCCESS, 'data');
export const getTeamInfoRequesttFailed = defaultActionCreator(GET_TEAM_INFO_REQUEST_FAILED, 'error');

export const GET_PLAYER_REQUEST = 'GET_PLAYER_REQUEST';
export const GET_PLAYER_REQUEST_SUCCESS = 'GET_PLAYER_REQUEST_SUCCESS';
export const GET_PLAYER_REQUEST_FAILED = 'GET_PLAYER_REQUEST_FAILED';

export const getPlayerRequest = defaultActionCreator(GET_PLAYER_REQUEST, 'data');
export const getPlayerRequestSuccess = defaultActionCreator(GET_PLAYER_REQUEST_SUCCESS, 'data');
export const getPlayerRequestFailed = defaultActionCreator(GET_PLAYER_REQUEST_FAILED, 'error');

export const GET_PLAYER_MATCHES_REQUEST = 'GET_PLAYER_MATCHES_REQUEST';
export const GET_PLAYER_MATCHES_REQUEST_SUCCESS = 'GET_PLAYER_MATCHES_REQUEST_SUCCESS';
export const GET_PLAYER_MATCHES_REQUEST_FAILED = 'GET_PLAYER_MATCHES_REQUEST_FAILED';

export const getPlayerMatchesRequest = defaultActionCreator(GET_PLAYER_MATCHES_REQUEST, 'data');
export const getPlayerMatchesRequestSuccess = defaultActionCreator(GET_PLAYER_MATCHES_REQUEST_SUCCESS, 'data');
export const getPlayerMatchesRequestFailed = defaultActionCreator(GET_PLAYER_MATCHES_REQUEST_FAILED, 'error');

export const GET_PLAYER_INFO_REQUEST = 'GET_PLAYER_INFO_REQUEST';
export const GET_PLAYER_INFO_REQUEST_SUCCESS = 'GET_PLAYER_INFO_REQUEST_SUCCESS';
export const GET_PLAYER_INFO_REQUEST_FAILED = 'GET_PLAYER_INFO_REQUEST_FAILED';

export const getPlayerInfoRequest = defaultActionCreator(GET_PLAYER_INFO_REQUEST, 'data');
export const getPlayerInfoRequestSuccess = defaultActionCreator(GET_PLAYER_INFO_REQUEST_SUCCESS, 'data');
export const getPlayerInfoRequestFailed = defaultActionCreator(GET_PLAYER_INFO_REQUEST_FAILED, 'error');

export const GET_TABLE_REQUEST = 'GET_TABLE_REQUEST';
export const GET_TABLE_REQUEST_SUCCESS = 'GET_TABLE_REQUEST_SUCCESS';
export const GET_TABLE_REQUEST_FAILED = 'GET_TABLE_REQUEST_FAILED';

export const getTableRequest = defaultActionCreator(GET_TABLE_REQUEST, 'data');
export const getTableRequestSuccess = defaultActionCreator(GET_TEAM_REQUEST_SUCCESS, 'data');
export const getTableRequestFailed = defaultActionCreator(GET_TABLE_REQUEST_FAILED, 'error');

export const GET_TEAM_NEXT_SCHEDULE_REQUEST = 'GET_TEAM_NEXT_SCHEDULE_REQUEST';
export const GET_TEAM_NEXT_SCHEDULE_REQUEST_SUCCESS = 'GET_TEAM_NEXT_SCHEDULE_REQUEST_SUCCESS';
export const GET_TEAM_NEXT_SCHEDULE_REQUEST_FAILED = 'GET_TEAM_NEXT_SCHEDULE_REQUEST_FAILED';

export const getTeamNextScheduleRequest = defaultActionCreator(GET_TEAM_NEXT_SCHEDULE_REQUEST, 'data');
export const getTeamNextScheduleRequestSuccess = defaultActionCreator(GET_TEAM_NEXT_SCHEDULE_REQUEST_SUCCESS, 'data');
export const getTeamNextScheduleRequestFailed = defaultActionCreator(GET_TEAM_NEXT_SCHEDULE_REQUEST_FAILED, 'error');

export const GET_TEAM_PREV_SCHEDULE_REQUEST = 'GET_TEAM_PREV_SCHEDULE_REQUEST';
export const GET_TEAM_PREV_SCHEDULE_REQUEST_SUCCESS = 'GET_TEAM_PREV_SCHEDULE_REQUEST_SUCCESS';
export const GET_TEAM_PREV_SCHEDULE_REQUEST_FAILED = 'GET_TEAM_PREV_SCHEDULE_REQUEST_FAILED';

export const getTeamPrevScheduleRequest = defaultActionCreator(GET_TEAM_PREV_SCHEDULE_REQUEST, 'data');
export const getTeamPrevScheduleRequestSuccess = defaultActionCreator(GET_TEAM_PREV_SCHEDULE_REQUEST_SUCCESS, 'data');
export const getTeamPrevScheduleRequestFailed = defaultActionCreator(GET_TEAM_PREV_SCHEDULE_REQUEST_FAILED, 'error');

export const GET_SCHEDULE_REQUEST = 'GET_SCHEDULE_REQUEST';
export const GET_SCHEDULE_REQUEST_SUCCESS = 'GET_SCHEDULE_REQUEST_SUCCESS';
export const GET_SCHEDULE_REQUEST_FAILED = 'GET_SCHEDULE_REQUEST_FAILED';

export const getScheduleRequest = defaultActionCreator(GET_SCHEDULE_REQUEST, 'data');
export const getScheduleRequestSuccess = defaultActionCreator(GET_SCHEDULE_REQUEST_SUCCESS, 'data');
export const getScheduleRequestFailed = defaultActionCreator(GET_SCHEDULE_REQUEST_FAILED, 'error');

export const GET_TODAYS_MATCHES_REQUEST = 'GET_TODAYS_MATCHES_REQUEST';
export const GET_TODAYS_MATCHES_REQUEST_SUCCESS = 'GET_TODAYS_MATCHES_REQUEST_SUCCESS';
export const GET_TODAYS_MATCHES_REQUEST_FAILED = 'GET_TODAYS_MATCHES_REQUEST_FAILED';

export const getTodaysMatchesRequest = defaultActionCreator(GET_TODAYS_MATCHES_REQUEST, 'data');
export const getTodaysMatchesRequestSuccess = defaultActionCreator(GET_TODAYS_MATCHES_REQUEST_SUCCESS, 'data');
export const getTodaysMatchesRequestFailed = defaultActionCreator(GET_TODAYS_MATCHES_REQUEST_FAILED, 'error');

export const GET_SCORERS_REQUEST = 'GET_SCORERS_REQUEST';
export const GET_SCORERS_REQUEST_SUCCESS = 'GET_SCORERS_REQUEST_SUCCESS';
export const GET_SCORERS_REQUEST_FAILED = 'GET_SCORERS_REQUEST_FAILED';

export const getScorersRequest = defaultActionCreator(GET_SCORERS_REQUEST, 'data');
export const getScorersRequestSuccess = defaultActionCreator(GET_SCORERS_REQUEST_SUCCESS, 'data');
export const getScorersRequestFailed = defaultActionCreator(GET_SCORERS_REQUEST_FAILED, 'error');

export const GET_HEAD2HEAD_REQUEST = 'GET_HEAD2HEAD_REQUEST';
export const GET_HEAD2HEAD_REQUEST_SUCCESS = 'GET_HEAD2HEAD_REQUEST_SUCCESS';
export const GET_HEAD2HEAD_REQUEST_FAILED = 'GET_HEAD2HEAD_REQUEST_FAILED';

export const getHead2HeadRequest = defaultActionCreator(GET_HEAD2HEAD_REQUEST, 'data');
export const getHead2HeadRequestSuccess = defaultActionCreator(GET_HEAD2HEAD_REQUEST_SUCCESS, 'data');
export const getHead2HeadRequestFailed = defaultActionCreator(GET_HEAD2HEAD_REQUEST_FAILED, 'error');

import { all, call, put, takeEvery, select } from 'redux-saga/effects'

import * as leaguesActions from '../actions/leagues'
import {
  getTableApi,
  getTeamApi,
  getTeamsApi,
  getTeamNextScheduleApi,
  getTeamPrevScheduleApi,
  getTeamInfoApi,
  getPlayerApi,
  getScheduleApi,
  getTodaysMatchesApi,
  getScorersApi,
  getHead2HeadApi,
  getPlayerInfoApi,
  getPlayerMatchesApi,
  getCompetitionsApi,
  addTeamApi,
  getCompetitionApi,
  getGroupApi,
  getGroupTableApi, removeCompetitionApi, addCompetitionApi, addGroupApi,
} from "../requests/leagues";


export function* getCompetitions() {
  try {
    const response = yield call(getCompetitionsApi);
    yield put({type: leaguesActions.GET_COMPETITIONS_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_COMPETITIONS_REQUEST_FAILED, error: e.response });
  }
}

export function* getTeams() {
  try {
    const response = yield call(getTeamsApi);
    yield put({type: leaguesActions.GET_TEAMS_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_TEAMS_REQUEST_FAILED, error: e.response });
  }
}

export function* addTeam(action) {
  try {
    const response = yield call(addTeamApi, action.data);
    yield put({type: leaguesActions.ADD_TEAM_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.ADD_TEAM_REQUEST_FAILED, error: e.response });
  }
}

export function* addCompetition(action) {
  try {
    const response = yield call(addCompetitionApi, action.data);
    if(action.callback) action.callback();
    yield put({type: leaguesActions.ADD_COMPETITION_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.ADD_COMPETITION_REQUEST_FAILED, error: e.response });
  }
}

export function* getCompetition(action) {
  try {
    const response = yield call(getCompetitionApi, action.data);
    yield put({type: leaguesActions.GET_COMPETITION_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_COMPETITION_REQUEST_FAILED, error: e.response });
  }
}

export function* removeCompetition(action) {
  try {
    yield call(removeCompetitionApi, action.data);
    const competitionsState = yield select(state => state.leagues.competitions);
    const competitions = competitionsState.filter(item => item._id !== action.data);
    yield put({type: leaguesActions.REMOVE_COMPETITION_REQUEST_SUCCESS, data: competitions});
  } catch (e) {
    yield put({ type: leaguesActions.REMOVE_COMPETITION_REQUEST_FAILED, error: e.response });
  }
}

export function* getGroup(action) {
  try {
    const response = yield call(getGroupApi, action.data);
    yield put({type: leaguesActions.GET_GROUP_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_GROUP_REQUEST_FAILED, error: e.response });
  }
}

export function* addGroup(action) {
  try {
    const response = yield call(addGroupApi, action.data);
    if(action.callback) action.callback();
    yield put({type: leaguesActions.ADD_GROUP_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.ADD_GROUP_REQUEST_FAILED, error: e.response });
  }
}

export function* getGroupTable(action) {
  try {
    const response = yield call(getGroupTableApi, action.data);
    yield put({type: leaguesActions.GET_GROUP_TABLE_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_GROUP_TABLE_REQUEST_FAILED, error: e.response });
  }
}







export function* getTeam(action) {
  try {
    const response = yield call(getTeamApi, action.data);
    yield put({type: leaguesActions.GET_TEAM_REQUEST_SUCCESS, data: response.data});
    yield put({type: leaguesActions.GET_TEAM_INFO_REQUEST, data: response.data.data.shortName});
    yield put({type: leaguesActions.GET_TEAM_NEXT_SCHEDULE_REQUEST, data: response.data.data.id});
    yield put({type: leaguesActions.GET_TEAM_PREV_SCHEDULE_REQUEST, data: response.data.data.id});
    // yield put({type: leaguesActions.GET_TEAM_PREV_SCHEDULE_REQUEST, data: response.data.teams[0].idTeam});
  } catch (e) {
    yield put({ type: leaguesActions.GET_TEAM_REQUEST_FAILED, error: e.response });
  }
}

export function* getTeamInfo(action) {
  try {
    const response = yield call(getTeamInfoApi, action.data);
    const team = response.data.teams ? response.data.teams[0] : {};
    yield put({type: leaguesActions.GET_TEAM_INFO_REQUEST_SUCCESS, data: team});
  } catch (e) {
    yield put({ type: leaguesActions.GET_TEAM_INFO_REQUEST_FAILED, error: e.response });
  }
}

export function* getPlayer(action) {
  try {
    const response = yield call(getPlayerApi, action.data);
    yield put({type: leaguesActions.GET_PLAYER_REQUEST_SUCCESS, data: response.data});
    yield put({type: leaguesActions.GET_PLAYER_MATCHES_REQUEST, data: action.data});
    yield put({type: leaguesActions.GET_PLAYER_INFO_REQUEST, data: response.data.name})
  } catch (e) {
    yield put({ type: leaguesActions.GET_PLAYER_REQUEST_FAILED, error: e.response });
  }
}

export function* getPlayerMatches(action) {
  try {
    const response = yield call(getPlayerMatchesApi, action.data);
    yield put({type: leaguesActions.GET_PLAYER_MATCHES_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_PLAYER_MATCHES_REQUEST_FAILED, error: e.response });
  }
}

export function* getPlayerInfo(action) {
  try {
    const response = yield call(getPlayerInfoApi, action.data);
    yield put({type: leaguesActions.GET_PLAYER_INFO_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_PLAYER_INFO_REQUEST_FAILED, error: e.response });
  }
}

export function* getTable(action) {
  try {
    const response = yield call(getTableApi, action.data);
    yield put({type: leaguesActions.GET_TABLE_REQUEST_SUCCESS, data: response.data});
    yield put({type: leaguesActions.GET_SCHEDULE_REQUEST, data: {
        matchday: response.data.data[0].playedGames + 1,
        id: action.data
      }});
  } catch (e) {
    yield put({ type: leaguesActions.GET_TABLE_REQUEST_FAILED, error: e.response });
  }
}

export function* getTeamNextSchedule(action) {
  try {
    const response = yield call(getTeamNextScheduleApi, action.data);
    yield put({type: leaguesActions.GET_TEAM_NEXT_SCHEDULE_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_TEAM_NEXT_SCHEDULE_REQUEST_FAILED, error: e.response });
  }
}

export function* getTeamPrevSchedule(action) {
  try {
    const response = yield call(getTeamPrevScheduleApi, action.data);
    yield put({type: leaguesActions.GET_TEAM_PREV_SCHEDULE_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_TEAM_PREV_SCHEDULE_REQUEST_FAILED, error: e.response });
  }
}

export function* getSchedule(action) {
  try {
    const response = yield call(getScheduleApi, action.data);
    yield put({type: leaguesActions.GET_SCHEDULE_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_SCHEDULE_REQUEST_FAILED, error: e.response });
  }
}


export function* getTodaysMatches(action) {
  try {
    const response = yield call(getTodaysMatchesApi, {date: action.data.date, status: action.data.type});

    const matches = {};
    response.data.data.map((item) => {
      const match = {
        ...item,
        summary: [...item.goals, ...item.substitutions, ...item.bookings].sort((a, b) => a.minute - b.minute)
      };
      if(matches[item.competition.id]){
        matches[item.competition.id] = [...matches[item.competition.id], match];
      }else{
        matches[item.competition.id] = [match];
      }
      return null;
    });

    yield put({type: leaguesActions.GET_TODAYS_MATCHES_REQUEST_SUCCESS, data: [matches, action.data.type]});
  } catch (e) {
    yield put({ type: leaguesActions.GET_TODAYS_MATCHES_REQUEST_FAILED, error: e.response });
  }
}

export function* getScorers(action) {
  try {
    const response = yield call(getScorersApi, action.data);
    yield put({type: leaguesActions.GET_SCORERS_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_SCORERS_REQUEST_FAILED, error: e.response });
  }
}

export function* getHead2Head(action) {
  try {
    const response = yield call(getHead2HeadApi, action.data);
    yield put({type: leaguesActions.GET_HEAD2HEAD_REQUEST_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: leaguesActions.GET_HEAD2HEAD_REQUEST_FAILED, error: e.response });
  }
}







export default all([
  takeEvery(leaguesActions.GET_COMPETITIONS_REQUEST, getCompetitions),
  takeEvery(leaguesActions.ADD_TEAM_REQUEST, addTeam),
  takeEvery(leaguesActions.ADD_COMPETITION_REQUEST, addCompetition),
  takeEvery(leaguesActions.GET_COMPETITION_REQUEST, getCompetition),
  takeEvery(leaguesActions.REMOVE_COMPETITION_REQUEST, removeCompetition),
  takeEvery(leaguesActions.GET_GROUP_REQUEST, getGroup),
  takeEvery(leaguesActions.ADD_GROUP_REQUEST, addGroup),
  takeEvery(leaguesActions.GET_GROUP_TABLE_REQUEST, getGroupTable),


  takeEvery(leaguesActions.GET_TEAMS_REQUEST, getTeams),
  takeEvery(leaguesActions.GET_TEAM_REQUEST, getTeam),
  takeEvery(leaguesActions.GET_TEAM_INFO_REQUEST, getTeamInfo),
  takeEvery(leaguesActions.GET_PLAYER_REQUEST, getPlayer),
  takeEvery(leaguesActions.GET_PLAYER_MATCHES_REQUEST, getPlayerMatches),
  takeEvery(leaguesActions.GET_PLAYER_INFO_REQUEST, getPlayerInfo),
  takeEvery(leaguesActions.GET_TABLE_REQUEST, getTable),
  takeEvery(leaguesActions.GET_TEAM_NEXT_SCHEDULE_REQUEST, getTeamNextSchedule),
  takeEvery(leaguesActions.GET_TEAM_PREV_SCHEDULE_REQUEST, getTeamPrevSchedule),
  takeEvery(leaguesActions.GET_SCHEDULE_REQUEST, getSchedule),
  takeEvery(leaguesActions.GET_TODAYS_MATCHES_REQUEST, getTodaysMatches),
  takeEvery(leaguesActions.GET_SCORERS_REQUEST, getScorers),
  takeEvery(leaguesActions.GET_HEAD2HEAD_REQUEST, getHead2Head),
])
import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as authActions from '../actions/auth';
import {doLoginApi, doLogoutApi} from "../requests/auth";

export function* doLogin(action) {
  try {
    const response = yield call(doLoginApi, action.data);
    yield put({ type: authActions.LOGIN_REQUEST_SUCCESS, data: response });
    localStorage.setItem("token", JSON.stringify(response.data));
  } catch (e) {
    yield put({ type: authActions.LOGIN_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* doLogout(action) {
  try {
    const response = yield call(doLogoutApi, action.data);
    yield put({ type: authActions.LOGOUT_REQUEST_SUCCESS, data: response });
  }catch (e) {
    yield put({ type: authActions.LOGOUT_REQUEST_FAILED, data: e.response.data.message })
  }
}

export default all([
  takeEvery(authActions.LOGIN_REQUEST, doLogin),
  takeEvery(authActions.LOGOUT_REQUEST, doLogout),
])
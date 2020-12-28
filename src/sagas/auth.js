import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as authActions from '../actions/auth';
import {doLoginApi, doLogoutApi, doRegisterApi} from "../requests/auth";
import {push} from "connected-react-router";

export function* doLogin(action) {
  try {
    const response = yield call(doLoginApi, action.data);
    yield put({ type: authActions.LOGIN_REQUEST_SUCCESS, data: response.data });
    localStorage.setItem("token", response.data.token);
    if(action.callback) action.callback();
    yield put(push('/'));
  } catch (e) {
    yield put({ type: authActions.LOGIN_REQUEST_FAILED, error: e.response });
  }
}

export function* doRegister(action) {
  try {
    const response = yield call(doRegisterApi, action.data);
    yield put({ type: authActions.REGISTER_REQUEST_SUCCESS, data: response.data });
    localStorage.setItem("token", response.data.token);
    yield put(push('/'));
  } catch (e) {
    yield put({ type: authActions.REGISTER_REQUEST_FAILED, error: e.response });
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
  takeEvery(authActions.REGISTER_REQUEST, doRegister),
  takeEvery(authActions.LOGOUT_REQUEST, doLogout),
])
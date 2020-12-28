import {defaultActionCreator} from "./actionCreator";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED';
export const loginRequest = defaultActionCreator(LOGIN_REQUEST, 'data', 'callback');

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS';
export const REGISTER_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED';
export const registerRequest = defaultActionCreator(REGISTER_REQUEST, 'data');

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS';
export const LOGOUT_REQUEST_FAILED = 'LOGOUT_REQUEST_FAILE';
export const logoutRequest = defaultActionCreator(LOGOUT_REQUEST, 'data');

export const RESET_ERRORS = 'RESET_ERRORS';
export const resetErrors = defaultActionCreator(RESET_ERRORS, 'data');
import {
  LOGIN_REQUEST_FAILED,
  LOGIN_REQUEST_SUCCESS,
  RESET_ERRORS,
  LOGOUT_REQUEST_FAILED,
  LOGOUT_REQUEST_SUCCESS, LOGIN_REQUEST,
} from '../actions/auth';

const initialState = {
  upload: {
    pending: false,
    error: {}
  },
  admin: localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        upload: {...state.upload, pending: true}
      };

    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        admin: action.data.data,
        upload: {...state.upload, pending: false}
      };

    case LOGIN_REQUEST_FAILED:
      return {
        ...state,
        upload: {pending: false, error: action.error},
      };

    case RESET_ERRORS:
      return {
        ...state,
        upload: {...state.upload, error: {}},
      };

    case LOGOUT_REQUEST_SUCCESS:
      localStorage.removeItem('token');
      window.location.reload();
      return;

    case LOGOUT_REQUEST_FAILED:
      return {
        ...state,
        upload: {...state.upload, error: action.error},
      };

    default:
      return state;
  }
}

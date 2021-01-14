import {
  LOGIN_REQUEST_SUCCESS, REGISTER_REQUEST_SUCCESS,
} from '../actions/auth';
import jwt_decode from "jwt-decode";

const initialState = {
  token: localStorage.getItem('token'),
  user: localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')) : null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
    case REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.data.token,
        user: action.data.user,
      };

    default:
      return state;
  }
}

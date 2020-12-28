import {
  LOGIN_REQUEST_SUCCESS, REGISTER_REQUEST_SUCCESS,
} from '../actions/auth';

const initialState = {
  token: localStorage.getItem('token'),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
    case REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.data.token,
      };

    default:
      return state;
  }
}

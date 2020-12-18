import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import leagues from "./leagues";
import auth from "./auth";

const createRootReducer = (history) => combineReducers({
  leagues,
  auth,
  router: connectRouter(history),
});

export default createRootReducer;
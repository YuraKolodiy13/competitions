import { all } from 'redux-saga/effects';
import leagues from "./leagues";
import auth from "./auth";

export default function* rootSaga() {
  yield all([
    leagues,
    auth,
  ])
}
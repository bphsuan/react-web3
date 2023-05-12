import { all, fork } from "redux-saga/effects";
import banlanceSaga from "../pages/Balance/saga";

export default function* rootSaga() {
  yield all([fork(banlanceSaga)]);
}

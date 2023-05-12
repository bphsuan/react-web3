import { combineReducers } from "redux";
import balance from "../pages/Balance/slice";

const rootReducer = combineReducers({
  balance,
});

export default rootReducer;

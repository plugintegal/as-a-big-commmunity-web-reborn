import { combineReducers } from "redux";
import { eventReducers } from "./eventReducers";
import { batchReducers } from "./batchReducers";

export default combineReducers({
  eventReducers,
  batchReducers,
});

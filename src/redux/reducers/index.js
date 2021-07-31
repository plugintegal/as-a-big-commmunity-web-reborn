import { combineReducers } from "redux";
import { eventReducers } from "./eventReducers";
import { batchReducers } from "./batchReducers";
import { categoryEventReducers } from './categoryEventReducers';
import { participantReducers } from './participantReducers';
import { blogReducers } from './blogReducers';
import { squadReducers } from './squadReducers';

export default combineReducers({
  eventReducers,
  batchReducers,
  categoryEventReducers,
  participantReducers,
  blogReducers,
  squadReducers
});

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import comments from "./comments";
import message from "./message";

const rootReducer = combineReducers({
  comments,
  message,
  routing: routerReducer
});

export default rootReducer;

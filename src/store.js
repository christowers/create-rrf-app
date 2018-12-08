import { createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from "./reducers/message";
import thunk from "redux-thunk";

import rootReducer from "./reducers/root";
import comments from "./data/comments";

const reducer = combineReducers({
  messageReducer
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;

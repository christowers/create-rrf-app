import { createStore } from "redux";

import rootReducer from "./reducers/root";
import comments from "./data/comments";

const defaultState = {
  comments
};

const store = createStore(rootReducer, defaultState);

export default store;

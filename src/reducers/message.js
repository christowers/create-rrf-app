import { SET_MESSAGE } from "../types/message";

export default (state = [], action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

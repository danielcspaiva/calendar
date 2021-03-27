import initialState from "../initialState";
import { combineReducers } from "redux";

const themeReducer = (state: any = initialState.theme, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};

const eventsReducer = (state: any = initialState.events, action: any) => {
  switch (action.type) {
    case "SET_EVENT":
      return { ...state, [action.data.id]: action.data };
    case "EDIT_EVENT":
      state[action.data.id] = action.data;
      return state;
    case "DELETE_EVENT":
      delete state[action.data];
      return state;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  theme: themeReducer,
  events: eventsReducer,
});

export default allReducers;

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
      if (state[action.data.date]) {
        state[action.data.date].push(action.data);
        return state;
      } else {
        return { ...state, [action.data.date]: [action.data] };
      }
    // case "EDIT_EVENT":
    //   state[action.data.date] = action.data;
    //   return state;
    case "DELETE_EVENT":
      delete state[action.data];
      return state;
    default:
      return state;
  }
};

const eventModalReducer = (
  state: any = initialState.showCreateEvent,
  action: any
) => {
  switch (action.type) {
    case "TOGGLE_EVENT_MODAL":
      return action.data;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  theme: themeReducer,
  events: eventsReducer,
  showCreateEvent: eventModalReducer,
});

export default allReducers;

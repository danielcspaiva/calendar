import initialState from "../initialState";
import { combineReducers } from "redux";
import { ApplicationState } from "../types";

const themeReducer = (
  state: ApplicationState["theme"] = initialState.theme,
  action: any
) => {
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

const createEventModalReducer = (
  state: ApplicationState["showCreateEvent"] = initialState.showCreateEvent,
  action: any
) => {
  switch (action.type) {
    case "TOGGLE_CREATE_EVENT_MODAL":
      return action.data;
    default:
      return state;
  }
};

const eventDetailModalReducer = (
  state: any = initialState.showEventDetail,
  action: any
) => {
  switch (action.type) {
    case "TOGGLE_EVENT_DETAIL_MODAL":
      return action.data.show;
    default:
      return state;
  }
};

const eventInDetailModalReducer = (
  state: any = initialState.showEventDetail,
  action: any
) => {
  switch (action.type) {
    case "TOGGLE_EVENT_DETAIL_MODAL":
      return action.data.event;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  theme: themeReducer,
  events: eventsReducer,
  showCreateEvent: createEventModalReducer,
  showEventDetail: eventDetailModalReducer,
  eventInDetail: eventInDetailModalReducer,
});

export default allReducers;

import initialState from "../initialState";
import { combineReducers } from "redux";
import {
  ApplicationState,
  ThemeReducerAction,
  EventReducerAction,
  CreateEventModalAction,
  EventDetailModalAction,
  EditEventlModalAction,
  startDayAction
} from "../../types";
import { EventProps } from "../../types";

const themeReducer = (
  state: ApplicationState["theme"] = initialState.theme,
  action: ThemeReducerAction
) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};

const eventsReducer = (
  state: ApplicationState["events"] = initialState.events,
  action: EventReducerAction
) => {
  switch (action.type) {
    case "SET_EVENT":
      if (state[action.data.date]) {
        state[action.data.date].push(action.data);
        return { ...state };
      } else {
        return { ...state, [action.data.date]: [action.data] };
      }
    case "EDIT_EVENT":
      if (action.events.event.date === action.events.oldEvent.date) {
        const day = state[action.events.event.date];
        const updatedDay = day.map((event: EventProps) => {
          if (event.id === action.events.event.id) {
            return action.events.event;
          } else {
            return event;
          }
        });
        state[action.events.event.date] = updatedDay;
      } else {
        const oldDay = state[action.events.oldEvent.date];
        const index = oldDay.indexOf(action.events.oldEvent);
        oldDay.splice(index, 1);
        if (state[action.events.event.date]) {
          state[action.events.event.date].push(action.events.event);
        } else {
          state[action.events.event.date] = [];
          state[action.events.event.date].push(action.events.event);
        }
      }
      return { ...state };
    case "DELETE_EVENT":
      let oldEvents = state[action.data.date];
      const index = oldEvents.indexOf(action.data);
      oldEvents.splice(index, 1);
      return { ...state };
    case "DELETE_ALL_EVENTS":
      state[action.day.toString()] = [];
      return { ...state };
    default:
      return { ...state };
  }
};

const createEventModalReducer = (
  state: ApplicationState["showCreateEvent"] = initialState.showCreateEvent,
  action: CreateEventModalAction
) => {
  switch (action.type) {
    case "TOGGLE_CREATE_EVENT_MODAL":
      return action.data;
    default:
      return state;
  }
};

const eventDetailModalReducer = (
  state: ApplicationState["showDayDetail"] = initialState.showDayDetail,
  action: EventDetailModalAction
) => {
  switch (action.type) {
    case "TOGGLE_DAY_DETAIL_MODAL":
      return action.data.show;
    default:
      return state;
  }
};

const dayInDetailModalReducer = (
  state: ApplicationState["showDayDetail"] = initialState.showDayDetail,
  action: EventDetailModalAction
) => {
  switch (action.type) {
    case "TOGGLE_DAY_DETAIL_MODAL":
      return action.data.day;
    default:
      return state;
  }
};

const editEventlModalReducer = (
  state: ApplicationState["showEditEvent"] = initialState.showEditEvent,
  action: EditEventlModalAction
) => {
  switch (action.type) {
    case "TOGGLE_EDIT_EVENT_MODAL":
      return action.data.show;
    default:
      return state;
  }
};

const eventToEditModalReducer = (
  state: ApplicationState["eventToEdit"] = initialState.eventToEdit,
  action: EditEventlModalAction
) => {
  switch (action.type) {
    case "TOGGLE_EDIT_EVENT_MODAL":
      return action.data.event;
    default:
      return state;
  }
};

const startDayReducer = (
  state: ApplicationState["startDay"] = initialState.startDay,
  action: startDayAction
) => {
  switch (action.type) {
    case "SET_START_DATE":
      return new Date(action.data.toString());
    default:
      return state;
  }
};

const allReducers = combineReducers({
  theme: themeReducer,
  events: eventsReducer,
  showCreateEvent: createEventModalReducer,
  showDayDetail: eventDetailModalReducer,
  dayInDetail: dayInDetailModalReducer,
  showEditEvent: editEventlModalReducer,
  eventToEdit: eventToEditModalReducer,
  startDay: startDayReducer,
});

export default allReducers;

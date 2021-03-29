import initialState from "../initialState";
import { combineReducers } from "redux";
import { ApplicationState } from "../types";
import { EventProps } from "../../types";

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
    case "EDIT_EVENT":
      if (action.data.event.date === action.data.oldEvent.date) {
        const day = state[action.data.event.date];
        const updatedDay = day.map((event: EventProps) => {
          if (event.id === action.data.event.id) {
            return action.data.event;
          } else {
            return event;
          }
        });
        state[action.data.event.date] = updatedDay;
      } else {
        const oldDay = state[action.data.oldEvent.date];
        const index = oldDay.indexOf(action.data.oldEvent);
        oldDay.splice(index, 1);
        if (state[action.data.event.date]) {
          state[action.data.event.date].push(action.data.event);
        } else {
          state[action.data.event.date] = [];
          state[action.data.event.date].push(action.data.event);
        }
      }
      return state;
    case "DELETE_EVENT":
      let oldEvents = state[action.data.date];
      const index = oldEvents.indexOf(action.data);
      oldEvents.splice(index, 1);
      return state;
    case "DELETE_ALL_EVENTS":
      state[action.data] = [];
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
  state: any = initialState.showDayDetail,
  action: any
) => {
  switch (action.type) {
    case "TOGGLE_DAY_DETAIL_MODAL":
      return action.data.show;
    default:
      return state;
  }
};

const dayInDetailModalReducer = (
  state: any = initialState.showDayDetail,
  action: any
) => {
  switch (action.type) {
    case "TOGGLE_DAY_DETAIL_MODAL":
      return action.data.day;
    default:
      return state;
  }
};

const editEventlModalReducer = (
  state: any = initialState.showEditEvent,
  action: any
) => {
  switch (action.type) {
    case "TOGGLE_EDIT_EVENT_MODAL":
      return action.data.show;
    default:
      return state;
  }
};

const eventToEditModalReducer = (
  state: any = initialState.eventToEdit,
  action: any
) => {
  switch (action.type) {
    case "TOGGLE_EDIT_EVENT_MODAL":
      return action.data.event;
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
});

export default allReducers;

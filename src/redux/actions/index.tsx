import { EventProps } from "../../types";

export const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};

export const setEvent = (event: EventProps) => {
  return {
    type: "SET_EVENT",
    data: event,
  };
};

export const editEvent = (event: EventProps) => {
  return {
    type: "EDIT_EVENT",
    data: event,
  };
};

export const deleteEvent = (eventID: string) => {
  return {
    type: "DELETE_EVENT",
    data: eventID,
  };
};

export const setShowCreateEvent = (show: boolean) => {
  return {
    type: "TOGGLE_CREATE_EVENT_MODAL",
    data: show,
  };
};

export const setshowDayDetail = (show: boolean, day: Date = new Date()) => {
  return {
    type: "TOGGLE_DAY_DETAIL_MODAL",
    data: { show, day },
  };
};

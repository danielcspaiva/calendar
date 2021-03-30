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

export const editEvent = (event: EventProps, oldEvent: EventProps) => {
  return {
    type: "EDIT_EVENT",
    data: { event, oldEvent },
  };
};

export const deleteEvent = (event: EventProps) => {
  return {
    type: "DELETE_EVENT",
    data: event,
  };
};

export const deleteAll = (day: Date) => {
  return {
    type: "DELETE_ALL_EVENTS",
    data: day,
  };
};

export const setShowCreateEvent = (show: boolean) => {
  return {
    type: "TOGGLE_CREATE_EVENT_MODAL",
    data: show,
  };
};

export const setShowEditEvent = (show: boolean, event: EventProps) => {
  return {
    type: "TOGGLE_EDIT_EVENT_MODAL",
    data: { show, event },
  };
};

export const setshowDayDetail = (show: boolean, day: Date = new Date()) => {
  return {
    type: "TOGGLE_DAY_DETAIL_MODAL",
    data: { show, day },
  };
};

export const setStartDay = (day: Date) => {
  return {
    type: "SET_START_DATE",
    data: day,
  };
};

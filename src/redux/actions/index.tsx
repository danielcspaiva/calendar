export const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};

export const setEvent = (event: any) => {
  return {
    type: "SET_EVENT",
    data: event,
  };
};

export const editEvent = (event: any) => {
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

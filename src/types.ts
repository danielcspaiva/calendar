export interface EventProps {
  name: string;
  city: string;
  color: "cyan" | "salmon" | "pink" | "green" | "yellow";
  date: string;
  time: string;
  id: string;
}

export interface ApplicationState {
  theme: string;
  events: { [key: string]: EventProps[] };
  showCreateEvent: boolean;
  showDayDetail: boolean;
  dayInDetail: Date;
  showEditEvent: boolean;
  eventToEdit: EventProps;
  startDay: Date;
}

export interface ThemeReducerAction {
  type: string;
  data: string;
}

interface EditEventAction {
  event: EventProps;
  oldEvent: EventProps;
}
export interface EventReducerAction {
  type: string;
  data: EventProps;
  events: {
    event: EventProps;
    oldEvent: EventProps;
  };
  day: string;
}

export interface CreateEventModalAction {
  type: string;
  data: boolean;
}

export interface EventDetailModalAction {
  type: string;
  data: {
    show: boolean;
    day: Date;
  };
}

export interface EditEventlModalAction {
  type: string;
  data: {
    show: boolean;
    event: EventProps;
  };
}

export interface startDayAction {
  type: string;
  data: Date;
}

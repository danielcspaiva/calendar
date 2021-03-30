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
  events: EventProps[];
  showCreateEvent: boolean;
  showDayDetail: boolean;
  dayInDetail: Date;
  showEditEvent: boolean;
  eventToEdit: EventProps;
  startDay: Date;
}

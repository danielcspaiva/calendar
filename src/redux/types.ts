import { EventProps } from "../types";

export interface ApplicationState {
  theme: string;
  events: EventProps[];
  showCreateEvent: boolean;
  showDayDetail: boolean;
  dayInDetail: Date;
  showEditEvent: boolean;
  eventToEdit: EventProps;
}

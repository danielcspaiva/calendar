import { EventProps } from "../types";

export interface ApplicationState {
  theme: string;
  events: EventProps[];
  showCreateEvent: boolean;
  showEventDetail: boolean;
  eventInDetail: EventProps;
}

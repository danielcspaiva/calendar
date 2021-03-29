import React, { SetStateAction, useState, Dispatch } from "react";
import {
  Container,
  Color,
  ColorPicker,
  AddEventInput,
  Title,
  CreateEventForm,
  SubmitButton,
  ColorContainer,
  DateContainer,
  Close,
  CheckMark,
} from "./styles";
import { setEvent, editEvent, deleteEvent } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { setShowCreateEvent, setShowEditEvent } from "../../redux/actions";
import { EventProps } from "../../types";
import { ApplicationState } from "../../redux/types";

interface EventModalProps {
  type: "create" | "edit";
}

const EventModal: React.FC<EventModalProps> = ({ type }) => {
  const { eventToEdit } = useSelector((state: ApplicationState) => state);
  const [eventName, setEventName] = useState(
    type === "create" ? "" : eventToEdit.name
  );
  const [eventColor, setEventColor] = useState<EventProps["color"]>(
    type === "create" ? "cyan" : eventToEdit.color
  );
  const [eventCity, setEventCity] = useState(
    type === "create" ? "" : eventToEdit.city
  );
  const [eventDate, setEventDate] = useState(
    type === "create" ? "" : eventToEdit.date
  );
  const [eventTime, setEventTime] = useState(
    type === "create" ? "" : eventToEdit.time
  );
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const event = {
      name: eventName,
      city: eventCity,
      color: eventColor,
      date: eventDate,
      time: eventTime,
    };

    console.log("handleSubmit", type);
    type === "create" ? dispatch(setEvent(event)) : dispatch(editEvent(event));
    handleClose();
  };

  const handleClose = () => {
    type === "create"
      ? dispatch(setShowCreateEvent(false))
      : dispatch(setShowEditEvent(false, eventToEdit));
  };

  return (
    <Container>
      <Close onClick={() => handleClose()} />
      <CreateEventForm>
        <Title>{type === "create" ? "Create New Event" : "Edit Event"}</Title>
        <AddEventInput
          type="text"
          required
          value={eventName}
          onChange={({ target }) => setEventName(target.value)}
          placeholder="Name"
        />
        <AddEventInput
          type="text"
          required
          value={eventCity}
          onChange={({ target }) => setEventCity(target.value)}
          placeholder="City"
        />
        <ColorPicker>
          <p>Color</p>
          <ColorContainer>
            <Color
              color={"cyan"}
              onClick={() => setEventColor("cyan")}
              selected={eventColor === "cyan"}
            >
              {eventColor === "cyan" && <CheckMark />}
            </Color>
            <Color
              color={"salmon"}
              onClick={() => setEventColor("salmon")}
              selected={eventColor === "salmon"}
            >
              {eventColor === "salmon" && <CheckMark />}
            </Color>
            <Color
              color={"pink"}
              onClick={() => setEventColor("pink")}
              selected={eventColor === "pink"}
            >
              {eventColor === "pink" && <CheckMark />}
            </Color>
            <Color
              color={"green"}
              onClick={() => setEventColor("green")}
              selected={eventColor === "green"}
            >
              {eventColor === "green" && <CheckMark />}
            </Color>
            <Color
              color={"yellow"}
              onClick={() => setEventColor("yellow")}
              selected={eventColor === "yellow"}
            >
              {eventColor === "yellow" && <CheckMark />}
            </Color>
          </ColorContainer>
        </ColorPicker>
        <DateContainer>
          <AddEventInput
            type="date"
            value={eventDate}
            required
            onChange={({ target }) => setEventDate(target.value)}
          />
          <AddEventInput
            type="time"
            value={eventTime}
            required
            onChange={({ target }) => setEventTime(target.value)}
          ></AddEventInput>
        </DateContainer>
        <SubmitButton onClick={() => handleSubmit()}>
          {type === "create" ? "Create" : "Edit"}
        </SubmitButton>
      </CreateEventForm>
    </Container>
  );
};

export default EventModal;

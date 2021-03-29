import React, { useState } from "react";
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
import { setEvent, editEvent } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { setShowCreateEvent, setShowEditEvent } from "../../redux/actions";
import { EventProps } from "../../types";
import { ApplicationState } from "../../types";

interface EventModalProps {
  type: "create" | "edit";
}

const EventModal: React.FC<EventModalProps> = ({ type }) => {
  const { eventToEdit } = useSelector((state: ApplicationState) => state);
  const [eventName, setEventName] = useState(type === "create" ? "" : eventToEdit.name);
  const [eventColor, setEventColor] = useState<EventProps["color"]>(
    type === "create" ? "cyan" : eventToEdit.color
  );
  const [eventCity, setEventCity] = useState(type === "create" ? "" : eventToEdit.city);
  const [eventDate, setEventDate] = useState(type === "create" ? "" : eventToEdit.date);
  const [eventTime, setEventTime] = useState(type === "create" ? "" : eventToEdit.time);
  const eventId = type === "create" ? Math.random().toString() : eventToEdit.id;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const event = {
      name: eventName,
      city: eventCity,
      color: eventColor,
      date: eventDate,
      time: eventTime,
      id: eventId,
    };

    console.log("handleSubmit", type);
    type === "create"
      ? dispatch(setEvent(event))
      : dispatch(editEvent(event, eventToEdit));
    handleClose();
  };

  const handleClose = () => {
    type === "create"
      ? dispatch(setShowCreateEvent(false))
      : dispatch(setShowEditEvent(false, eventToEdit));
  };

  return (
    <Container data-testid={"modal-container"}>
      <Close onClick={() => handleClose()} data-testid={"close-button"} />
      <CreateEventForm data-testid={"form-container"}>
        <Title data-testid={"form-title"}>
          {type === "create" ? "Create New Event" : "Edit Event"}
        </Title>
        <AddEventInput
          type="text"
          required
          value={eventName}
          onChange={({ target }) => setEventName(target.value)}
          placeholder="Name"
          maxLength={30}
          data-testid={"name-input"}
        />
        <AddEventInput
          type="text"
          required
          value={eventCity}
          onChange={({ target }) => setEventCity(target.value)}
          placeholder="City"
          data-testid={"city-input"}
        />
        <ColorPicker data-testid={"color-container"}>
          <p data-testid={"color-title"}>Color</p>
          <ColorContainer data-testid={"color-inner-container"}>
            <Color
              color={"cyan"}
              onClick={() => setEventColor("cyan")}
              selected={eventColor === "cyan"}
              data-testid={"color-cyan"}
            >
              {eventColor === "cyan" && <CheckMark />}
            </Color>
            <Color
              color={"salmon"}
              onClick={() => setEventColor("salmon")}
              selected={eventColor === "salmon"}
              data-testid={"color-salmon"}
            >
              {eventColor === "salmon" && <CheckMark />}
            </Color>
            <Color
              color={"pink"}
              onClick={() => setEventColor("pink")}
              selected={eventColor === "pink"}
              data-testid={"color-pink"}
            >
              {eventColor === "pink" && <CheckMark />}
            </Color>
            <Color
              color={"green"}
              onClick={() => setEventColor("green")}
              selected={eventColor === "green"}
              data-testid={"color-green"}
            >
              {eventColor === "green" && <CheckMark />}
            </Color>
            <Color
              color={"yellow"}
              onClick={() => setEventColor("yellow")}
              selected={eventColor === "yellow"}
              data-testid={"color-yellow"}
            >
              {eventColor === "yellow" && <CheckMark />}
            </Color>
          </ColorContainer>
        </ColorPicker>
        <DateContainer data-testid={"date-container"}>
          <AddEventInput
            type="date"
            value={eventDate}
            required
            onChange={({ target }) => setEventDate(target.value)}
            data-testid={"date-input"}
          />
          <AddEventInput
            type="time"
            value={eventTime}
            required
            onChange={({ target }) => setEventTime(target.value)}
            data-testid={"time-input"}
          ></AddEventInput>
        </DateContainer>
        <SubmitButton onClick={() => handleSubmit()} data-testid={"submit-button"}>
          {type === "create" ? "Create" : "Edit"}
        </SubmitButton>
      </CreateEventForm>
    </Container>
  );
};

export default EventModal;

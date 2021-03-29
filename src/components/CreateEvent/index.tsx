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
import { setShowCreateEvent } from "../../redux/actions";
import { EventProps } from "../../types";

const CreateEvent: React.FC = () => {
  const [eventName, setEventName] = useState("");
  const [eventColor, setEventColor] = useState<EventProps["color"]>("cyan");
  const [eventCity, setEventCity] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const event = {
      name: eventName,
      city: eventCity,
      color: eventColor,
      date: eventDate,
      time: eventTime,
    };

    dispatch(setEvent(event));
    dispatch(setShowCreateEvent(false));
  };
  return (
    <Container>
      <Close onClick={() => dispatch(setShowCreateEvent(false))} />
      <CreateEventForm>
        <Title>Create new event</Title>
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
        <SubmitButton onClick={() => handleSubmit()}>Create</SubmitButton>
      </CreateEventForm>
    </Container>
  );
};

export default CreateEvent;

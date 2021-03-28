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
} from "./styles";
import { setEvent, editEvent, deleteEvent } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { setShowCreateEvent } from "../../redux/actions";

const CreateEvent: React.FC = () => {
  const [eventName, setEventName] = useState("");
  const [eventColor, setEventColor] = useState("");
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
      <CreateEventForm>
        <Title>Create new Event</Title>
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
            />
            <Color
              color={"salmon"}
              onClick={() => setEventColor("salmon")}
              selected={eventColor === "salmon"}
            />
            <Color
              color={"pink"}
              onClick={() => setEventColor("pink")}
              selected={eventColor === "pink"}
            />
            <Color
              color={"green"}
              onClick={() => setEventColor("green")}
              selected={eventColor === "green"}
            />
            <Color
              color={"yellow"}
              onClick={() => setEventColor("yellow")}
              selected={eventColor === "yellow"}
            />
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

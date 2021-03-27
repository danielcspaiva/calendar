import React, { useState } from "react";
import {
  Container,
  Color,
  ColorPicker,
  AddEventInput,
  Title,
  CreateEventForm,
} from "./styles";

const CreateEvent: React.FC = () => {
  const [eventName, setEventName] = useState("");
  const [eventColor, setEventColor] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  return (
    <Container>
      <CreateEventForm>
        <Title>Create new Event</Title>
        <AddEventInput
          type="text"
          value={eventName}
          onChange={({ target }) => setEventName(target.value)}
          name="name"
          placeholder="Name"
        />
        <AddEventInput
          type="text"
          value={eventDescription}
          onChange={({ target }) => setEventDescription(target.value)}
          name="description"
          placeholder="Description"
        />
        <div>
          <ColorPicker>
            <Title>Color</Title>
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
          </ColorPicker>
        </div>
        <AddEventInput id="date" type="date" />
        <AddEventInput
          type="time"
          id="appt"
          name="appt"
          min="09:00"
          max="18:00"
          required
        ></AddEventInput>
        <AddEventInput type="submit" value="Create" />
      </CreateEventForm>
    </Container>
  );
};

export default CreateEvent;

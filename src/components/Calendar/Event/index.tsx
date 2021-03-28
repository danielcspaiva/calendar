import React from "react";
import { Container } from "./styles";

interface EventProps {
  event: {
    name: string;
    city: string;
    color: "cyan" | "salmon" | "pink" | "green" | "yellow";
    date: string;
    time: string;
  };
}

const Event: React.FC<EventProps> = ({ event }) => {
  const { city, color, date, name, time } = event;
  return <Container color={color}>{time + ": " + name}</Container>;
};

export default Event;

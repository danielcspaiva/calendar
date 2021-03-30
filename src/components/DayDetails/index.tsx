import React from "react";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../types";
import Day from "../Calendar/Week/Day";

const DayDetails: React.FC = () => {
  const { dayInDetail } = useSelector((state: ApplicationState) => state);

  return (
    <Container className="animate__animated animate__fadeIn">
      <Day day={dayInDetail} detail={true} />
    </Container>
  );
};

export default DayDetails;

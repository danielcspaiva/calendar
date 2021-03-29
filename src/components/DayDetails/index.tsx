import React from "react";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../redux/types";
import Day from "../Calendar/Week/Day";

const DayDetails: React.FC = () => {
  const { dayInDetail } = useSelector((state: ApplicationState) => state);

  return (
    <Container>
      <Day day={dayInDetail} detail={true} />
    </Container>
  );
};

export default DayDetails;

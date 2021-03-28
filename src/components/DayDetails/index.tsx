import React from "react";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../redux/types";
import Day from "../Calendar/Week/Day";

const DayDetails: React.FC = ({}) => {
  const { dayInDetail } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <Day day={dayInDetail} detail={true} />
    </Container>
  );
};

export default DayDetails;

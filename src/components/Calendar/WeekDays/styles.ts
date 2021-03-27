import styled from "styled-components";

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  margin: 5px;
`;

export const DayOfWeek = styled.text`
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  self-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

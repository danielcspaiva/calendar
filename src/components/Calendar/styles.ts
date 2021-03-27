import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 86%;
  padding: 2%;
`;

export const AddEventButton = styled.div`
  position: absolute;
  bottom: 10%;
  right: 5%;
  height: 75px;
  width: 75px;
  border-radius: 75px;
  background: ${({ theme }) => theme.colors.accent};
  &:hover {
    background: ${({ theme }) => shade(0.1, theme.colors.accent)};
`;

import styled from "styled-components";
import { shade } from "polished";
import { GrFormAdd } from "react-icons/gr";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  max-width: 1200px;
  height: 86%;
  padding: 2%;
`;

export const AddEventButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10%;
  right: 5vw;
  height: 7vh;
  width: 7vh;
  border-radius: 7vh;
  cursor: pointer;
  
  background: ${({ theme }) => theme.colors.accent};
  &:hover {
    background: ${({ theme }) => shade(0.1, theme.colors.accent)};
  }
`;

export const AddIcon = styled(GrFormAdd).attrs(() => ({
  size: "40px",
}))`
  color: ${({ theme }) => theme.colors.lightText};
`;

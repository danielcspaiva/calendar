import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  width: 90%;
  max-width: 500px;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  right: 5vw;
  bottom: 20vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

interface ColorProps {
  color: "cyan" | "salmon" | "pink" | "green" | "yellow";
  selected: boolean;
  onClick: any;
}

export const Color = styled.div<ColorProps>`
  height: ${({ selected }) => (selected ? 35 : 25)}px;
  width: ${({ selected }) => (selected ? 35 : 25)}px;
  border-radius: 50px;
  margin: 20px;
  background: ${({ theme, color }) => theme.colors[color]};
`;

export const ColorPicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CreateEventForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const AddEventInput = styled.input`
  background: none;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 16px;
`;

export const Title = styled.div`
  font-size: 20px;
`;

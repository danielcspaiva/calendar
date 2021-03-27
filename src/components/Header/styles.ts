import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Month = styled.text`
  font-size: 30px;
  font-weight: bold;
`;

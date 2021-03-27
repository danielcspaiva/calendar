import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 800px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

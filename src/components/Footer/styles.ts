import styled from "styled-components";

export const Container = styled.div`
  height: 7%;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.text`
  font-size: 30px;
  font-weight: bold;
`;

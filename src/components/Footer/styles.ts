import styled from "styled-components";

export const Container = styled.footer`
  height: 7%;
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    margin-right: 10px;
  }
`;

export const FooterText = styled.p`
  font-size: 1.5vh;
  font-weight: bold;
`;

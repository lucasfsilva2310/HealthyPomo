import styled from "styled-components";
import { CountdownButton } from "./Countdown.style";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 10rem;
  margin-top: 1rem;
  font-style: italic;
  background: ${(props) =>
    props.darkMode === true ? "black" : "var(--white)"};
  transition: background 0.5s;
`;

export const InputButton = styled(CountdownButton)`
  width: 10rem;
  margin-top: 1rem;
  height: 3rem;
`;

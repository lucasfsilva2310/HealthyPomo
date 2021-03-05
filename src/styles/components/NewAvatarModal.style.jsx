import styled from "styled-components";
import { Container } from "./LevelUpModal.style";

export const AvatarContainer = styled(Container)`
  justify-content: space-around;
  height: 27rem;

  div {
    margin: 4rem 0;
  }

  input {
    height: 2rem;
    width: 15rem;
  }

  a {
    background: var(--blue);
    color: var(--white);
    border-radius: 5px;
  }
`;

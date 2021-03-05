import styled from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${(props) =>
      props.darkMode === true ? "var(--darkComponents)" : "var(--white)"};
    transition: background 0.5s;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  div span {
    flex: 1;
  }

  div > span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  div > span:last-child {
    border-left: 1px solid #f0f1f3;
  }

  span {
    font-size: 6.25rem;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: var(--blue-dark);
  }

  &:disabled {
    background: ${(props) =>
      props.darkMode === true ? "var(--darkComponents)" : "var(--white)"};
    transition: background 0.5s;
    color: var(--text);
    cursor: not-allowed;
  }
`;

export const CountdownButtonActive = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${(props) =>
    props.darkMode === true ? "var(--darkComponents)" : "var(--white)"};
  transition: background 0.5s;
  color: var(--title);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: var(--red);
    color: var(--white);
  }
`;

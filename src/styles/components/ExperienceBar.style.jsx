import styled from "styled-components";

export const ExperienceBarContainer = styled.header`
  display: flex;

  align-items: center;
  font-size: 1rem;

  div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 0.1rem;
    position: relative;
  }

  div > div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
  }
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  /* Usar translate para centralizar um elemento que tem o position absolute */
  transform: translateX(-50%);
  transition: all 0.7s;
`;

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 7rem;

  strong {
    margin-bottom: 1rem;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;

  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + span {
    background-color: #363636;
  }

  input:focus + span {
    box-shadow: 0 0 1px #353434;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  span.round {
    border-radius: 34px;
  }

  span.round:before {
    border-radius: 50%;
  }
`;
